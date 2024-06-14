"use react";

import React, { useRef, useState } from "react";

const AddSingleCover = ({ setImage }: { setImage: any }) => {
  const [blob, setBlob] = useState("");
  const imageRef = useRef<any>(null);

  const handleImage = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const isValid = ext === "png" || ext === "jpg" || ext === "jpeg";
    if (!isValid) return alert("Invalid File Type!");
    await setImage(file);
    const urlObj = URL.createObjectURL(file);
    return setBlob(urlObj);
  };
  return (
    <div className="w-full" style={{ padding: "0" }}>
      <img
        src={blob || "/relativeImages/add.png"}
        alt=""
        className="w-full hover:shadow-lg rounded-3xl"
        style={{
          height: "500px",
          objectFit: "contain",
          cursor: "pointer",
          transition: "0.5s",
          padding: "0",
          background: "linear-gradient(to right, pink, lightblue)",
        }}
        onClick={() => {
          imageRef?.current?.click();
        }}
      />
      <input
        type="file"
        onChange={handleImage}
        ref={imageRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AddSingleCover;
