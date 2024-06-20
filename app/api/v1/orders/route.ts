import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import order from "@/models/order";
import { headers } from "next/headers";

export const GET = async () => {
  await ConnectDB();
  try {
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "0") || 0;
    const orderList = await order
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems);

    return NextResponse.json(orderList);
  } catch (error: any) {
    return NextResponse.json({ msg: error?.message }, { status: 500 });
  }
};

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
