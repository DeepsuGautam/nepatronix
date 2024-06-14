"use client";

import React, { useState } from "react";
import DesAdd from "./AddComps/DesAdd";
import Quill from "@/Quill/Quill";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import AddSingleCover from "./AddComps/AddSingleCover";
import AddTitle from "./AddComps/AddTitle";

const AddNewBlog = () => {
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
    const formReq: boolean = await postAdminData(newFormData, "blogs");
    if (formReq) {
      alert("Blog Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      
      <AddSingleCover setImage={setImage}/>
      <AddTitle title={title} setTitle={setTitle}/>
      <DesAdd description={description} setDescription={setDescription} />
      <Quill contentEdit={setContent} imagesEdit={setImages} />

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

export default AddNewBlog;
