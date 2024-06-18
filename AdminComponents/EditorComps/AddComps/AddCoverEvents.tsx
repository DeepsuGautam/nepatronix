"use client";
import React, { useRef, useState } from "react";

const AddCoverEvents = ({ setImage }: { setImage: any }) => {
  const [blob, setBlob] = useState("");

  const imageRef = useRef<any>(null);
  const changeImage = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const isValid = ext === "png" || ext === "jpg" || ext === "jpeg";
    if (!isValid) return alert("Invalid File Type!");
    setImage(file);
    const urlBlob = URL.createObjectURL(file);
    setBlob(urlBlob);
    return;
  };

  return (
    <div className="w-full h-fit shadow-2xl bg-white bg-cover rounded-3xl bg-fixed bg-center relative">
      <img
        className="rounded-3xl"
        src={blob ? blob : "/relativeImages/add.png"}
        style={{
          height: "500px",
          margin: "0 auto",
          cursor: "pointer",
          width: "100%",
          objectFit: blob ? `cover` : "contain",
        }}
        onClick={() => {
          imageRef?.current?.click();
        }}
      />

      <input
        type="file"
        ref={imageRef}
        onChange={changeImage}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AddCoverEvents;
