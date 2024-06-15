import { NextResponse } from "next/server";
import path from "path";

export const GET = () => {
  try {
    const data: { success: boolean; msg: string } = {
      success: true,
      msg: "API is working",
    };
    const newPath = path.join(process.cwd(), "public");
    return NextResponse.json({ data: newPath });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
