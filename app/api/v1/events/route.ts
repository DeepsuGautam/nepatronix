import ConnectDB from "@/config/ConnectDB";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import event from "@/models/event";

export const POST = async (req: any) => {
  await ConnectDB();
  try {
    const form: any = await req.formData();
    const cover: any =await form.get("cover");
    const coverImage: string = await UploadImage("events", cover);
    const content = await handleQuillReq(form, "events");
    const images: string[] = [];

    for (let i = 0; i < 3; i++) {
      let innerImage: any = await form.get(`image${i}`);
      if (innerImage) {
        let innerLink: string = await UploadImage("events", innerImage);
        images.push(innerLink);
      }
    }

    const newEvent = new event({
      cover: coverImage,
      content,
      images,
    });

    await newEvent.save();

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
    const elems: number = parseInt(header.get("elems") || "18") || 18;
    const data = await event
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
