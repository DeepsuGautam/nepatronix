"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_APP_BACKEND;

export const handleSubmit = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const res = await fetch(`${backendUrl}/api/v1/admin`, {
      cache:"no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Detected Error in respone");
    const { cookie } = await res.json();
    cookies().set("token", cookie);
    return true;
  } catch (error) {
    return false;
  }
};
