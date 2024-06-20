"use client";

import React, { useEffect, useRef, useState } from "react";

const EditServCover = ({
  oldImage,
  setImage,
  title,
  setTitle,
}: {
  oldImage: string;
  setImage: any;
  title: string;
  setTitle: any;
}) => {
  // blob of image
  const [blob, setBlob] = useState("");
  // ref
  const imgRef: any = useRef(null);

  // handle Image
  const handleImg = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = await file?.name?.split(".")?.pop();
    const valid = ext === "png";
    if (!valid) return alert("Ïnvalid File type!");
    await setImage(file);
    const newBlob = URL.createObjectURL(file);
    return setBlob(newBlob)
  };

  return (
    <section className="w-full min-h-[500px] text-center flex justify-evenly flex-wrap gap-[30px] bg-gradient-to-r from-blue-500 to-red-400 animate-gradient-move">
      {/* for image */}
      <div className="w-fit flex flex-col justify-center">
        <img
          src={blob || oldImage}
          alt=""
          width={300}
          height={300}
          className="object-contain object-center cursor-pointer"
          onClick={() => {
            imgRef?.current?.click();
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={imgRef}
          onChange={handleImg}
        />
      </div>
      <div className="w-fit flex flex-col justify-center">
        <input
          value={title}
          onChange={(e: any) => {
            setTitle(e?.target?.value);
          }}
          placeholder="Enter Title"
          className="min-w-[350px] p-[20px] text-8xl bg-transparent font-bold"
          style={{ background: "transparent", color: "white" }}
        />
      </div>
    </section>
  );
};

export default EditServCover;
