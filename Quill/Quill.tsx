"use client";

import React, { useEffect, useRef, useState } from "react";
import { makeBold, makeColor, makeItalic, makeTextSize } from "./Functions";
import { FaBold, FaImage, FaItalic } from "react-icons/fa";

const Quill = ({ contentEdit, imagesEdit }: any) => {
  const [content, setContent] = useState<string>("");

  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    contentEdit(content);
  }, [content]);

  const dataRef = useRef<any>(null);
  const imageRef = useRef<any>(null);

  const handleInput = () => {
    const data = dataRef?.current?.innerHTML;
    setContent(data);
  };

  useEffect(() => {
    const addInnerHtml = async () => {
      const imagesCopy = [...images];
      const lastImage: any = imagesCopy.pop();
      const imageBlob = URL.createObjectURL(lastImage);
      const newHtmlImg = document.createElement("img");
      newHtmlImg.src = imageBlob;
      newHtmlImg.style.width = "100%";
      newHtmlImg.id = `images${imagesCopy?.length}`;
      await dataRef.current.appendChild(newHtmlImg);
      await imagesEdit(images);
      await contentEdit(dataRef?.current?.innerHTML);
      return;
    };

    if (images.length > 0) {
      addInnerHtml();
    }
  }, [images]);

  const handleImageAdd = async (e: any) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const validImage =
      ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif";
    if (!validImage) return alert("Invalid File Type.");
    return setImages((prev: any) => [...prev, file]);
  };

  return (
    <section
      style={{
        width: "calc(100% - 40px)",
        maxWidth: "960px",
        margin: "0 auto",
        border: "2px solid gray",
        fontSize: "20px",
        borderRadius:"20px",
        overflow:"hidden"
      }}
    >
      {/* tool box */}
      <div
        className="w-full flex justify-center gap-5 p-5 bg-gray-500"
        style={{
          fontSize: "18px",
          background: "darkgray",
          padding: "20px",
          gap: "40px",
        }}
      >
        {/* make bold */}
        <button
          type="button"
          onClick={() => {
            makeBold();
          }}
        >
          <FaBold />
        </button>

        {/* make italic */}
        <button
          type="button"
          onClick={() => {
            makeItalic();
          }}
        >
          <FaItalic />
        </button>

        {/* make font size */}
        <select
          onChange={(e: any) => {
            makeTextSize(e?.target?.value);
          }}
          defaultValue="20px"
          style={{ fontSize: "18px" }}
        >
          {[...Array(5)].map((_, i) => {
            const size = 20 + i * 10;
            return (
              <option key={size} value={`${size}px`}>
                {size}px
              </option>
            );
          })}
        </select>

        {/* make color */}
        <input
          type="color"
          onChange={(e: any) => {
            makeColor(e?.target?.value);
          }}
        />

        {/* make bold */}
        <button
          type="button"
          onClick={() => {
            imageRef?.current?.click();
          }}
        >
          <FaImage />
        </button>
      </div>

      {/* image input */}
      <input
        type="file"
        ref={imageRef}
        onChange={handleImageAdd}
        style={{ display: "none" }}
      />

      {/* input */}
      <div
        style={{
          width: "calc(100%)",
          height: "500px",
          overflowY: "scroll",
          padding: "20px",
          background: "white",
        }}
        contentEditable
        ref={dataRef}
        onInput={handleInput}
      ></div>
    </section>
  );
};

export default Quill;
