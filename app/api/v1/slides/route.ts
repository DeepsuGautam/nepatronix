import ConnectDB from "@/config/ConnectDB";
import slide from "@/models/slide";
import { UploadImage } from "@/utility/UploadImage";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const slideData: any = await slide.find({}).sort({ _id: -1 });

    return NextResponse.json(slideData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: File = form.get("cover");
    const content: string = form.get("content");
    const button1: string = form.get("button1");
    const button2: string = form.get("button2");
    const bg:string = form.get("bg")

    console.log(button1, button2);

    const coverImage: string = await UploadImage("slides", cover);

    const slides = new slide({
      title,
      image: coverImage,
      content,
      button1: JSON.parse(button1),
      button2: JSON.parse(button2),
      bg
    });

    await slides.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
