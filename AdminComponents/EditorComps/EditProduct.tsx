"use client";

import React, { useEffect, useState } from "react";
import Quill from "@/Quill/Quill";
import {  putAdmin } from "@/ApiRequest/PostAdmin";
import EditProductImage from "./EditorComp/EditProductImage";

const EditProduct = ({data}:{data:any}) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description )
      return alert("Enter All Data");
    if(!content && !data?.content)return alert("Enter All Data");
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
    const formReq: boolean = await putAdmin(newFormData, "products", data?._id);
    if (formReq) {
      alert("Product Edited Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  useEffect(()=>{
    if(data){
        setTitle(data?.title)
        setDescription(data?.description)
    }

  },[data])

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* submit data */}

      <div
        className="w-full p-[40px] flex flex-wrap justify-center"
        style={{ gap: "20px" }}
      >
        {/* image */}
        <EditProductImage setImage={setImage} oldImage={data?.image}/>

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

      <Quill initial={data?.content} contentEdit={setContent} imagesEdit={setImages}/>
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

export default EditProduct;
