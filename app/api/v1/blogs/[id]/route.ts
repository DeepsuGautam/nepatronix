import ConnectDB from "@/config/ConnectDB";
import blog from "@/models/blog";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { handleQuillEdit } from "@/Quill/QuillEdit";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
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

export const PUT = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;

    const idOfData = requestedUrl?.split("/")?.pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await blog.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: any = form.get("cover");
    const description: string = form.get("description");

    console.log(cover);

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.image);
      const coverImage: string = await UploadImage("blogs", cover);
      data.image = coverImage;
    }

    const newContentExist = form.get("content");
    if (newContentExist) {
      const content = await handleQuillEdit(form, "blogs", data?.content);
      data.content = await content;
    }
    data.title = title;
    data.description = description;

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
