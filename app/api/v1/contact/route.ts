import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import contact from "@/models/contact";
import { headers } from "next/headers";

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
export const GET = async () => {
  await ConnectDB();
  try {
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "12") || 12;
    const contactList = await contact
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems);

    return NextResponse.json(contactList);
  } catch (error: any) {
    return NextResponse.json({ msg: error?.message }, { status: 500 });
  }
};