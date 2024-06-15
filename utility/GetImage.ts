import fs from "fs";
import path from "path";

export const ImageSender = async (filePath: string, name: string) => {
  try {
    const joins = path.resolve(process.cwd(), "uploads", filePath, name);
    const exists = fs.existsSync(joins);
    if (!exists) throw new Error("File Doesnot Exists!");
    const myFile = fs.readFileSync(joins)
    return myFile;
  } catch (err:any) {
    return { msg: err?.msg };
  }
};
