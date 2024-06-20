"use client";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AddSlide = () => {
  const [blob, setBlob] = useState("");

  const [upgrades, setUpgrades] = useState({
    image: "",
    title: "",
    content: "",
    bg: "",
  });

  const [button1, setButton1] = useState({
    text: "",
    link: "",
  });
  const [button2, setButton2] = useState({
    text: "",
    link: "",
  });

  const imgs = useRef<any>(null);

  const imgChange = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".").pop();
    const isValid = ext === "png";
    if (!isValid) return alert("Select Valid File!");
    setUpgrades((prev: any) => ({ ...prev, image: file }));
    const blobUrl = URL.createObjectURL(file);
    setBlob(blobUrl);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!upgrades?.title || !upgrades?.content || !upgrades?.image)
      return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("cover", upgrades?.image);
    newFormData.append("title", upgrades?.title);
    newFormData.append("content", upgrades?.content);
    newFormData.append("bg", upgrades?.bg);
    newFormData.append("button1", JSON.stringify(button1));
    newFormData.append("button2", JSON.stringify(button2));
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "slides");
    if (formReq) {
      alert("Slide Added");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%], mx-auto my-[20px] min-h-[600px] flex flex-wrap justify-around"
      style={{
        background: upgrades?.bg,
        width: "80%",
        margin: "20px auto",
        minHeight: "600px",
        border:"1px solid"
      }}
    >
      <Image
        src={blob || `/relativeImages/add.png`}
        alt=""
        width={300}
        height={400}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          imgs?.current?.click();
        }}
      />
      <input type="file" className="hidden" ref={imgs} onChange={imgChange} />
      <div
        className=""
        style={{ width: "300px", height: "300px", padding: "30px" }}
      >
        <input
          value={upgrades?.title}
          style={{
            border: "none",
            padding: "0",
            background: "transparent",
            lineHeight: "6rem",
          }}
          placeholder="Enter Title"
          onChange={(e: any) => {
            setUpgrades((prev: any) => ({ ...prev, title: e?.target?.value }));
          }}
          className="text-5xl font-bold"
        />
        <br />
        <textarea
          value={upgrades?.content}
          style={{
            border: "none",
            width: "300px",
            height: "100px",
            padding: "0",
            background: "transparent",
            lineHeight: "2rem",
            resize:"none"
          }}
          placeholder="Enter Description"
          onChange={(e: any) => {
            setUpgrades((prev: any) => ({
              ...prev,
              content: e?.target?.value,
            }));
          }}
          className="text-2xl font-bold"
        />
        <div
          className="p-[10px] rounded-xl"
          style={{ background: "linear-gradient(to right, red, blue)" }}
        >
          <input
            type="text"
            className="text-2xl text-white"
            placeholder="Enter Button Text"
            style={{ background: "transparent" }}
            value={button1?.text}
            onChange={(e: any) => {
              setButton1((prev: any) => ({ ...prev, text: e?.target?.value }));
            }}
          />

          <hr />

          <input
            type="text"
            className="text-2xl text-white"
            placeholder="Enter Button Link"
            value={button1?.link}
            style={{ background: "transparent" }}
            onChange={(e: any) => {
              setButton1((prev: any) => ({ ...prev, link: e?.target?.value }));
            }}
          />
        </div>
        <br />
        <div
          className="p-[10px] rounded-xl"
          style={{ background: "linear-gradient(to right, red, blue)" }}
        >
          <input
            type="text"
            className="text-2xl text-white"
            placeholder="Enter Button Text"
            value={button2?.text}
            style={{ background: "transparent" }}
            onChange={(e: any) => {
              setButton2((prev: any) => ({ ...prev, text: e?.target?.value }));
            }}
          />

          <hr />

          <input
            type="text"
            className="text-2xl text-white"
            placeholder="Enter Button Link"
            value={button2?.link}
            style={{ background: "transparent" }}
            onChange={(e: any) => {
              setButton2((prev: any) => ({ ...prev, link: e?.target?.value }));
            }}
          />
        </div>
        {/* for background */}
        <input
          type="text"
          value={upgrades?.bg}
          onChange={(e: any) => {
            setUpgrades((prev: any) => ({ ...prev, bg: e?.target?.value }));
          }}
          className="text-2xl"
          placeholder="Enter Css Background Code"
          style={{ padding: "10px", margin: "20px 0", width: "100%" }}
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white text-2xl"
          style={{ padding: "10px", borderRadius: "10px" }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddSlide;
