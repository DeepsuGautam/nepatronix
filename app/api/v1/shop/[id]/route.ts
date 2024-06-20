import ConnectDB from "@/config/ConnectDB";
import shop from "@/models/shop";
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
    const data = await shop.findOne({ _id: idOfData });

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

    const data: any = await shop.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.image);
    await deleteImage(data.icon);
    await deleteQuillImages(data.content);

    // delete from db
    await shop.deleteOne({ _id: idOfData });

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

    const data: any = await shop.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: any = form.get("cover");
    const icon: any = form.get("icon");
    const description: string = form.get("description");
    const price: string = form.get("price");
    const tags: string = form.get("tags");
    const tagList: string[] = tags?.split(" ");
    const productNo: string = form.get("productNo");
    const comp: string = form.get("components");

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.image);
      const coverImage: string = await UploadImage("shops", cover);
      data.image = coverImage;
    }
    if (icon && icon !== "undefined" && icon.size > 0) {
      await deleteImage(data?.image);
      const iconImage: string = await UploadImage("shops", icon);
      data.icon = iconImage;
    }

    const newContentExist = form.get("content");
    if (newContentExist) {
      const content = await handleQuillEdit(form, "shops", data?.content);
      data.content = await content;
    }
    data.title = title;
    data.description = description;
    data.tags = tagList;
    data.price = price;
    data.productNo = productNo;
    data.components = JSON.parse(comp);

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
