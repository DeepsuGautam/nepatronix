"use client";

import React, { useRef, useState } from "react";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import Image from "next/image";

const AddGallery = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [blob, setBlob] = useState("");

  const imgRef = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image || !title) return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("image", image);
    newFormData.append("description", title);
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "gallery");
    if (formReq) {
      alert("Blog Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  const handleImage = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".").pop();
    const isValid = ext === "jpg" || ext === "png" || ext === "jpeg";
    if (!isValid) return alert("Enter A Valid File");
    setImage(file);
    const url = URL.createObjectURL(file);
    setBlob(url);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Image
        src={blob || "/relativeImages/add.png"}
        style={{ margin: "0 auto", cursor: "pointer" }}
        alt=""
        width={400}
        height={400}
        onClick={() => {
          imgRef?.current?.click();
        }}
      />
      <input
        type="file"
        onChange={handleImage}
        ref={imgRef}
        style={{ display: "none" }}
      />
      <br />
      <br />
      <center>
        <textarea
          value={title}
          onChange={(e: any) => {
            setTitle(e?.target?.value);
          }}
          className="rounded-2xl resize-none"
          style={{
            width: "100%",
            height:"500px",
            maxWidth: "800px",
            margin: " 0 auto",
            padding: "10px",
            fontSize: "20px",
            border: "2px solid gray",
          }}
          placeholder="Enter Title Of Image"
        />

<br />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:shadow-xl transition-all duration-300"
          style={{
            background: "#3495eb",
            maxWidth: "1000px",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          Upload
        </button>
      </center>
    </form>
  );
};

export default AddGallery;
