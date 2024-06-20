import ConnectDB from "@/config/ConnectDB";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import achievement from "@/models/achievement";

export const POST = async (req: any) => {
  await ConnectDB();
  try {
    const form: any = await req.formData();
    const cover: any =await form.get("cover");
    const coverImage: string = await UploadImage("achievements", cover);
    const content = await handleQuillReq(form, "achievements");
    const images: string[] = [];

    for (let i = 0; i < 3; i++) {
      let innerImage: any = await form.get(`image${i}`);
      if (innerImage) {
        let innerLink: string = await UploadImage("achievements", innerImage);
        images.push(innerLink);
      }
    }

    const newachievement = new achievement({
      cover: coverImage,
      content,
      images,
    });

    await newachievement.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "4") || 4;
    const data = await achievement
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
