import { headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { isValidObjectId } from "mongoose";
import users from "@/models/users";
import bcrypt from "bcrypt";
import ConnectDB from "@/config/ConnectDB";
const pass: any = process.env.NEXT_APP_TOKEN;

// use bearer
export const GET = async () => {
  try {
    await ConnectDB();
    const Headers = headers();
    const raw: any = await Headers.get("authorization");
    const token = await raw.split(" ")[1];
    if (!token) throw new Error("Unauthorized Access Request!");

    const verify: any = jwt.verify(token, pass);
    const uniqueId = verify?._id;
    if (!uniqueId || !isValidObjectId(uniqueId))
      throw new Error("Invalid Admin Access!");

    // check admin
    const isUser = await users.findOne({ _id: uniqueId });
    if (!isUser || isUser.role !== "admin")
      throw new Error("Not Authorized Admin!");

    return NextResponse.json({ msg: "success" });
  } catch (error: any) {
    return NextResponse.json({ msg: "" }, { status: 400 });
  }
};

// responsed unique token
export const POST = async (req: any) => {
  try {
    await ConnectDB();

    const bodyData: any = await req.json();
    const { username, password } = bodyData;

    const User = await users.findOne({ username: username });
    if (!User || User.role !== "admin") throw new Error("Admin Not Found!");

    const verifyPwd = await bcrypt.compare(password, User?.password);
    if (!verifyPwd) throw new Error("Un Verified Password");

    const makeJWT: string = await jwt.sign(
      { _id: User?._id, Date: new Date() },
      pass,
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({ cookie: makeJWT }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ msg: "Internal Error" }, { status: 404 });
  }
};
