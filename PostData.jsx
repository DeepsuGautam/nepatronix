"use client";

import Cookies from "js-cookie";

const PostData = async (url, data, headers) => {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: { ...headers },
      credentials: "include",
      body: data,
    });
    const response = await res.json();
    if (!res?.ok) {
      throw new Error(response?.message);
    }
    return {
      success: true,
      message: response?.message,
      data: response,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: error?.message };
  }
};

export const PostToClient = async ({ method, headers, body, url }) => {
  try {
    const cookie = Cookies.get("accessToken");
    if (!cookie) {
      throw new Error("Login Expired!");
    }

    const conf = {
      method,
      headers: { ...headers, auth: `BEARER ${cookie}` },
      body,
    };

    const response = await fetch(url, conf);
    const resData = await response.json();
    if (resData?.accessToken) {
      Cookies.set("accessToken", resData?.accessToken, { expires: 3 });
    }
    if (!response?.ok) throw new Error(resData?.message);
    return { ok: true, message: resData?.message, data: resData?.data };
  } catch (error) {
    console.log(error);
    return { ok: false, message: error?.message };
  }
};

export default PostData;
