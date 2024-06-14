"use client";

import { handleSubmit } from "@/ApiRequest/MakeLogin";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onchangeHandler = (e: any) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (!data || !data?.username || !data?.password) {
          return alert("Enter Proper Data!");
        }
        const positive: boolean = await handleSubmit(data);
        if (!positive) {
          return alert("Something Went Wrong!");
        }

        return router.push("/admin-pannel");
      }}
      className="w-fit h-fit absolute bg-white p-[20px] top-1/2 left-1/2  rounded-3xl shadow-lg text-center"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <br />
      <h1
        className="text-blue-500 font-bold text-5xl"
        style={{ color: "#4287f5" }}
      >
        Login As Admin{" "}
      </h1>
      <br />
      <br />
      <input
        type="text"
        name="username"
        className="w-full min-w-[320px] p-[10px]"
        value={data?.username}
        style={{
          fontSize: "18px",
          border: "2px solid gray",
          borderRadius: "20px",
        }}
        onChange={onchangeHandler}
        placeholder="Enter Username"
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        className="w-full min-w-[320px] p-[10px]"
        style={{
          fontSize: "18px",
          border: "2px solid gray",
          borderRadius: "20px",
        }}
        value={data?.password}
        placeholder="Enter Password"
        onChange={onchangeHandler}
      />
      <br />
      <br />
      <button
        className="bg-red-500 hover:shadow-xl p-[10px] text-[18px] text-[white] rounded-2xl cursor-pointer font-medium"
        style={{ color: "white" }}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
