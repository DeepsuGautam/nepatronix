import { ImageSender } from "@/utility/GetImage";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const url: string = await req?.url?.split("/")?.pop();
  const file: any = await ImageSender("gallery", url);
  const ext: any = await url?.split(".")?.pop();

  let fileMime = "image/";
  if (ext === "png") fileMime = "image/png";
  else if (ext === "jpg" || ext === "jpeg") fileMime = "image/jpeg";

  return new NextResponse(file, {
    headers: {
      "Content-Type": fileMime,
    },
  });
};
