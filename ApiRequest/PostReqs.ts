"use server";

const env = process.env.NEXT_APP_BACKEND;

export const postData = async (data: any, type: string) => {
  try {
    const res = await fetch(`${env}/api/v1/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Request Error");
    }
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  }
};
