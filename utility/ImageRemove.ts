import fs from "fs";
import path from "path";

export const deleteImage = async (imgPath: string): Promise<void> => {
  if (!imgPath) {
    console.log("Image path is required");
    return;
  }

  try {
    // Resolve the image path relative to the 'public' directory
    const image = path.resolve(process.cwd(), "uploads", imgPath.slice(1));

    console.log(`Attempting to delete image at path: ${image}`);

    // Check if the file exists
    try {
      await fs.promises.access(image);
    } catch (error) {
      throw new Error("File not found");
    }
    fs.unlinkSync(image)
    console.log("File deleted successfully");
  } catch (error: any) {
    console.error("Error deleting image:", error.message);
  }
  return;
};
