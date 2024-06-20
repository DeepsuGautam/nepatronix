"use client";
import { DelData } from "@/ApiRequest/DeleteReqs";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SlideEditor = ({ data }: { data: any }) => {
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

  useEffect(() => {
    if (!data) return;
    setUpgrades((prev: any) => ({ ...prev, title: data?.title }));
    setUpgrades((prev: any) => ({ ...prev, bg: data?.bg }));
    setUpgrades((prev: any) => ({ ...prev, content: data?.content }));
    setUpgrades((prev: any) => ({ ...prev, bg: data?.bg }));
    setButton1(data?.button1);
    setButton2(data?.button2);
  }, [data]);

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
    if (!upgrades?.title || !upgrades?.content) return alert("Enter All Data");
    if (!upgrades?.image && !data?.image) return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("cover", upgrades?.image);
    newFormData.append("title", upgrades?.title);
    newFormData.append("content", upgrades?.content);
    newFormData.append("bg", upgrades?.bg)
    newFormData.append("button1", JSON.stringify(button1));
    newFormData.append("button2", JSON.stringify(button2));
    //post reqs
    const formReq: boolean = await putAdmin(newFormData, "slides", data?._id);
    if (formReq) {
      alert("Slide Updated");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  const handlDelete=async()=>{
    const confirm = window.confirm("Delete This Slide?");
    if(!confirm) return;
    const deleteData:boolean = await DelData("slides", data?._id)
    if(!deleteData) return alert("Could Not Delete Slide");
    alert("Slide Deleted Successfully!");
    return window.location.reload();
  }

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
        src={blob || `/api/files${data?.image}`}
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
          }}
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
          Edit
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          className="bg-red-500 text-white text-2xl"
          style={{ padding: "10px", borderRadius: "10px" }}
          onClick={handlDelete}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default SlideEditor;
