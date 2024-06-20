"use client";

import React, { useState } from "react";
import Quill from "@/Quill/Quill";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import ProductImage from "./AddComps/ProductImage";

const AddNewProduct = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image || !title || !description || !content)
      return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("cover", image);
    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("content", content);
    // map to images
    if (images?.length > 0) {
      const lengthOfArr = images.length;
      newFormData.append("images", lengthOfArr);
      for (let i = 0; i < lengthOfArr; i++) {
        newFormData.append(`images${i}`, images[i]);
      }
    }
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "products");
    if (formReq) {
      alert("Product Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* submit data */}

      <div
        className="w-full p-[40px] flex flex-wrap justify-center"
        style={{ gap: "20px" }}
      >
        {/* image */}
        <ProductImage setImage={setImage} />

        {/* for details */}
        <div style={{ width: "500px", padding: "20px" }}>
          <input
            type="text"
            value={title}
            onChange={(e: any) => {
              setTitle(e?.target?.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "20px",
              fontSize: "30px",
            }}
            placeholder="Enter Title"
          />
          <br />
          <br />
          <textarea value={description} 
            onChange={(e: any) => {
              setDescription(e?.target?.value);
            }}
            placeholder="Enter Description"
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "20px",
              fontSize: "20px",
              resize:"none",
              height:"300px"
            }}/>
        </div>
      </div>
      <br/>
      <br/>

      <Quill contentEdit={setContent} imagesEdit={setImages}/>
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

export default AddNewProduct;
