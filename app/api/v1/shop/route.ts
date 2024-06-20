import ConnectDB from "@/config/ConnectDB";
import shop from "@/models/shop";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "12") || 12;
    const data = await shop
      .find()
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: File = form.get("cover");
    const icon: File = form.get("icon");
    const description: string = form.get("description");
    const price: string = form.get("price");
    const tags: string = form.get("tags");
    const tagList: string[] = tags?.split(" ");
    const productNo: string = form.get("productNo");
    const comps : string = form.get("components");

    const coverImage: string = await UploadImage("shops", cover);
    const iconPath: string = await UploadImage("shops", icon);

    const content: string = await handleQuillReq(form, "shops");
    const shops = new shop({
      title,
      description,
      content,
      image: coverImage,
      price,
      tags: tagList,
      icon: iconPath,
      productNo,
      components:JSON.parse(comps)
    });

    await shops.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
