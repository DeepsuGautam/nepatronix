import { ImageSender } from "@/utility/GetImage";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const url: string = await req?.url?.split("/")?.pop();
  const file: any = await ImageSender("books/pdf", url);
  const ext: any = await url?.split(".")?.pop();

  let fileMime = "application/pdf";

  return new NextResponse(file, {
    headers: {
      "Content-Type": fileMime,
    },
  });
};
