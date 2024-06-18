"use server";

import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const genUnique = async (name: string): Promise<string> => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
  const joins = name.split(" ").join("_");
  return `${timestamp}-${randomString}_${joins}`;
};

const deleteImage = async (removableSrc: string): Promise<void> => {
  const source = removableSrc.split("api/files/")[1];
  if (!source) return;

  const filePath = path.resolve(process.cwd(), "uploads", source);
  try {
    fs.unlinkSync(filePath);
    console.log(`Deleted image: ${filePath}`);
  } catch (e: any) {
    console.error(`Failed to delete image: ${filePath}. Error: ${e.message}`);
  }
};

const compareToDelete = async (
  oldContent: string,
  newContent: string
): Promise<void> => {
  const oldDom = new JSDOM(oldContent);
  const newDom = new JSDOM(newContent);

  const oldImageLists = Array.from(
    oldDom.window.document.querySelectorAll("img")
  );
  const newImageLists = Array.from(
    newDom.window.document.querySelectorAll("img")
  );

  // Deleting unnecessary Images
  for (const oldImage of oldImageLists) {
    const includes = newImageLists.some(
      (newImage) => newImage.src === oldImage.src
    );
    if (!includes) {
      await deleteImage(oldImage.src);
    }
  }
};

const handleImageUpload = async (
  content: string,
  images: File[],
  type: string
): Promise<string> => {
  const dom = new JSDOM(content);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const htmlElems: any = dom.window.document.querySelectorAll(`#images${i}`);

    if (htmlElems.length > 0) {
      let newElem: HTMLImageElement | null = null;
      for (let j = 0; j < htmlElems.length; j++) {
        const sourceOfElem = htmlElems[j]?.src;
        const isValidToAdd = !sourceOfElem.includes("api/files/");
        if (isValidToAdd) {
          newElem = htmlElems[j] as HTMLImageElement;
          break;
        }
      }
      if (newElem) {
        const uniqueName = await genUnique(image.name);
        const createPath = path.resolve(
          process.cwd(),
          `uploads/${type}/${uniqueName}`
        );
        const fileBuffer = Buffer.from(await image.arrayBuffer());
        try {
          fs.writeFileSync(createPath, fileBuffer);
          newElem.src = `/api/files/${type}/${uniqueName}`;
        } catch (error: any) {
          console.error(
            `Failed to save image: ${createPath}. Error: ${error.message}`
          );
        }
      }
    }
  }

  return dom.serialize();
};

interface FormData {
  get(name: string): string | File | null;
}

const handleQuillEdit = async (
  formData: FormData,
  type: string,
  content: string
): Promise<string> => {
  const oldContent = content;
  const newContent = formData.get("content") as string;

  // Compare and delete old images not present in new content
  await compareToDelete(oldContent, newContent);

  // Handle new images
  const imgLength = formData.get("images") as string | null;
  const images: File[] = [];
  if (imgLength) {
    const j = parseInt(imgLength);
    for (let i = 0; i < j; i++) {
      const newImage = formData.get(`images${i}`) as File;
      images.push(newImage);
    }
    const updatedContent = await handleImageUpload(newContent, images, type);
    return updatedContent;
  }

  return newContent;
};

export { handleQuillEdit };
