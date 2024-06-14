import { NextResponse } from "next/server";

export const GET = () => {
  try {
    const data: { success: boolean; msg: string } = {
      success: true,
      msg: "API is working",
    };
    return NextResponse.json(data);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
