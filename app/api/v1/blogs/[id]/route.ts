import ConnectDB from "@/config/ConnectDB";
import blog from "@/models/blog";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { deleteImage } from "@/utility/ImageRemove";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    const idOfData = await requestedUrl?.split("/")?.pop();
    const data = await blog.findOne({ _id: idOfData });

    if (!data) throw new Error("Data Not Found!");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: true }, { status: 400 });
  }
};

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    if (!requestedUrl) {
      throw new Error("Invalid URL");
    }

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await blog.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image 
    await deleteImage(data.image);
    await deleteQuillImages(data.content);

    // delete from db
    await blog.deleteOne({ _id: idOfData });

    // response
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.error("Error in DELETE handler:", error.message);
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 400 }
    );
  }
};
