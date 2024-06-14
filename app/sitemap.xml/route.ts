import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import {URL} from "@/models/url"

export const GET = async() => {
  try {

   await ConnectDB();

    return new NextResponse("", {
      status: 200,
      headers: {
        "Content-Type": "text/xml",
        "Cache-Control": "stale-while-revalidate, s-maxage=3600",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
