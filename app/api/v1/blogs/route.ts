import ConnectDB from "@/config/ConnectDB";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import blog from "@/models/blog"

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const data = await blog
      .find({})
      .sort({_id:-1})
      .skip(page * 18)
      .limit(18);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const form :any= await req.formData();

    const title:string = form.get("title");
    const cover:File = form.get("cover");
    const description:string = form.get("description");

    const coverImage:string = await UploadImage("blogs", cover)

    const content = await handleQuillReq(form, "blogs");
    const blogs = new blog({
      title,
      image: coverImage,
      description,
      content,
    });

    await blogs.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
