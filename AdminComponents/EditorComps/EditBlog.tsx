"use client";

import React, { useEffect, useState } from "react";
import DesAdd from "./AddComps/DesAdd";
import Quill from "@/Quill/Quill";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import AddTitle from "./AddComps/AddTitle";
import EditSingleCover from "./EditorComp/EditSingleCover";

const EditBlog = ({ data }: { data: any }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [oldImage, setOldImage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) return alert("Enter All Data");
    if (!content && !data?.content) return alert("Enter All Data");
    if (!oldImage && !image) return alert("Enter Cover Image!");
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
    const formReq: boolean = await putAdmin(newFormData, "blogs", data?._id);
    if (formReq) {
      alert("Blog Edited Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setDescription(data?.description);
      setOldImage(`/api/files${data?.image}`);
    }
  }, [data]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <EditSingleCover oldImage={oldImage} setImage={setImage} />
      <AddTitle title={title} setTitle={setTitle} />
      <DesAdd description={description} setDescription={setDescription} />
      <Quill
        initial={data?.content || ""}
        contentEdit={setContent}
        imagesEdit={setImages}
      />

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

export default EditBlog;
