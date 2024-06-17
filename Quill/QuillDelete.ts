"use server";
import { JSDOM } from "jsdom";
import path from "path";
import fs from "fs";

export const deleteQuillImages = async (content: string) => {
  const dom = new JSDOM(content);
  const elemArr: any = dom.window.document.querySelectorAll("img");
  const noOfImg = elemArr.length; // No need for await here

  for (let i = 0; i < noOfImg; i++) {
    let elem = elemArr[i];
    let pathSrc = await elem.src.split("api/files/")[1];
    console.log(pathSrc); // Remove leading '/'
    try {
      let removable = path.resolve(process.cwd(), "uploads", pathSrc);
      fs.unlinkSync(removable);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  return null;
};
