import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return new NextResponse(
      JSON.stringify({ data: "V1 route is perfectly woring" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(JSON.stringify({ msg: "Internal Error" }), {
      status: 500,
    });
  }
};
