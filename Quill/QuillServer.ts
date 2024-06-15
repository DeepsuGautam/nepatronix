"use server";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const handleImageUpload = async (
  content: string,
  images: any[],
  type: string
) => {
  const dom = new JSDOM(content);
  for (let i = 0; i < images?.length; i++) {
    const image: any = images[i];
    const htmlElem: any = dom.window.document.getElementById(`images${i}`);
    if (htmlElem) {
      const uniqueName: string = await genUnique(image?.name);
      const createPath: string = path.resolve(
        process.cwd(),
        `uploads/${type}/${uniqueName}`
      );
      const fileBuffer: any = Buffer.from(await image?.arrayBuffer());
      try {
        fs.writeFileSync(createPath, fileBuffer);
        htmlElem.src = `/api/files/${type}/${uniqueName}`;
      } catch (error) {
        console.error(error);
      }
    }
  }
  const updatedDom = dom.serialize();
  return updatedDom;
};

const genUnique = async (name: string) => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
  const joins = name.split(" ").join("_");
  return `${timestamp}-${randomString}_${joins}`;
};

const handleQuillReq = async (formData: any, type: string) => {
  const content = formData.get("content");
  const imgLength = formData.get("images");
  const images: File[] = [];
  if (imgLength) {
    const j = parseInt(imgLength);
    //   for ading images
    for (let i = 0; i < j; i++) {
      let newImage: File = formData.get(`images${i}`);
      images.push(newImage);
    }
    const newContent = await handleImageUpload(content, images, type);
    return newContent;
  }
  return content;
};

export { handleQuillReq };
