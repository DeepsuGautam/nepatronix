"use client";

import React, { useRef, useState } from "react";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import AddCoverEvents from "./AddComps/AddCoverEvents";
import Quill from "@/Quill/Quill";
const AddAchievements = () => {
  const [image, setImage] = useState();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [images3, setImages3] = useState([null, null, null]);
  const [img3Blob, setImg3Blob] = useState(["", "", ""]);
  const imageRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image || !content || images3?.length !== 3)
      return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("cover", image);
    newFormData.append("content", content);
    for (let i = 0; i < 3; i++) {
      newFormData.append(`image${i}`, images3[i]);
    }
    // map to images
    if (images?.length > 0) {
      const lengthOfArr = images.length;
      newFormData.append("images", lengthOfArr);
      for (let i = 0; i < lengthOfArr; i++) {
        newFormData.append(`images${i}`, images[i]);
      }
    }
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "achievements");
    if (formReq) {
      alert("Achievements Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  const addImage = async (e: any, index: number) => {
    const file = e?.target?.files[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const isValid = ext === "jpg" || ext === "jpeg" || ext === "png";
    if (!isValid) return alert("Invalid File Type!");
    const imgs = [...images3];
    const blob3 = [...img3Blob];
    imgs[index] = file;
    setImages3(imgs);
    blob3[index] = URL.createObjectURL(file);
    setImg3Blob(blob3);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <AddCoverEvents setImage={setImage} />

      <div
        className="w-full flex flex-wrap justify-around"
        style={{
          minHeight: "500px",
        }}
      >
        {/* quill */}
        <div style={{ width: "50%", minWidth: "350px", padding: "30px " }}>
          <Quill contentEdit={setContent} imagesEdit={setImages} />
        </div>
        {/* images */}
        <div
          className="flex flex-wrap"
          style={{
            width: "50%",
            minWidth: "350px",
            padding: "30px",
            gap: "30px",
          }}
        >
          {Array(3)
            ?.fill(null)
            ?.map((_, idx) => (
              <div key={idx} style={{ width: "30%" }}>
                <img
                  src={
                    img3Blob[idx] ? img3Blob[idx] : "/relativeImages/add.png"
                  }
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "contain",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    imageRefs[idx]?.current?.click();
                  }}
                />
                <input
                  type="file"
                  ref={imageRefs[idx]}
                  onChange={(e: any) => {
                    addImage(e, idx);
                  }}
                  style={{ display: "none" }}
                />
              </div>
            ))}
        </div>
      </div>

      {/* submit data */}
      <center>
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

export default AddAchievements;
