import fs from "fs";
import path from "path";

const genUnique = async (name: string) => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
  const joins = name.split(" ").join("_");
  return `${timestamp}-${randomString}_${joins}`;
};

const UploadImage = async (type: string, file: File) => {
  const image: any = file;
  const uniqueName: string = await genUnique(image?.name);
  const createPath: string = path.resolve(
    process.cwd(),
    `public/${type}/${uniqueName}`
  );
  const fileBuffer: any = Buffer.from(await image?.arrayBuffer());
  try {
    fs.writeFileSync(createPath, fileBuffer);
  } catch (error) {
    console.error(error);
  }
  return `/${type}/${uniqueName}`
};

export {UploadImage};