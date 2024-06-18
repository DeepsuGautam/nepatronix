"use server";

import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const webUrl = process.env.NEXT_APP_BACKEND;

const middleware = async (req: NextApiRequest) => {
  return
  try {
    const requestedUrl = req.url;
    if (!requestedUrl?.includes("admin-pannel")) return;

    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (!token?.value) {
      throw new Error("Could Not Find Admin Token");
    }

    const validateAdmin = await fetch(`${webUrl}/api/v1/admin`, {
      cache: "no-store",
      method: "GET",
      headers: {
        authorization: `Bearer ${token?.value}`,
      },
    });
    if (!validateAdmin.ok) throw new Error("Ünauthorized Access");

    return;
  } catch (err: any) {
    console.log(err?.message);
    return NextResponse.redirect(`${webUrl}/admin-login`);
  }
};

export default middleware;
