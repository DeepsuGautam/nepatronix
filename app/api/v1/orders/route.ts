import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import order from "@/models/order"

export const POST = async (req: any) => {
  await ConnectDB();
  try {
    const requestedData = await req.json();
    const neworder = await new order(requestedData);
    await neworder.save();
    return NextResponse.json({ message: "Data Sent!" });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: "Error Sending Message" },
      { status: 500 }
    );
  }
};
