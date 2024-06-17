import ConnectDB from "@/config/ConnectDB";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import gallery from "@/models/gallery";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "18") || 18;
    const data = await gallery
      .find({})
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
    const cover: File = form.get("image");
    const description: string = form.get("description");

    const coverImage: string = await UploadImage("gallery", cover);
    const gallerys = new gallery({
      description,
      image: coverImage,
    });

    await gallerys.save();
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
