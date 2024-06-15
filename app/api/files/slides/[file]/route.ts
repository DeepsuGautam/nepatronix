import { ImageSender } from "@/utility/GetImage";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const url: string = await req?.url?.split("/")?.pop();
  const file: any = await ImageSender("slides", url);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
