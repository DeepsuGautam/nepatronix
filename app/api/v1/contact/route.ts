import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import contact from "@/models/contact";

export const POST = async (req: any) => {
  await ConnectDB();
  try {
    const requestedData = await req.json();
    const newContact = await new contact(requestedData);
    await newContact.save();
    return NextResponse.json({ message: "Data Sent!" });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: "Error Sending Message" },
      { status: 500 }
    );
  }
};
