"use client";
import React, { useRef, useState } from "react";
import AddSingleCover from "./AddComps/AddSingleCover";
import AddTitle from "./AddComps/AddTitle";
import DesAdd from "./AddComps/DesAdd";
import { postAdminData } from "@/ApiRequest/PostAdmin";

const AddNewBook = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState();
  const [blob, setBlob] = useState("");

  const bookref = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image || !title || !description || !pdf)
      return alert("Enter All Data");
    const newFormData: any = new FormData();
    newFormData.append("cover", image);
    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("content", pdf);
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "books");
    if (formReq) {
      alert("Book Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <AddSingleCover setImage={setImage} />
      <AddTitle title={title} setTitle={setTitle} />
      <DesAdd description={description} setDescription={setDescription} />{" "}
      {/* submit data */}
      <input
        type="file"
        onChange={(e: any) => {
          const file = e?.target?.files[0];
          if (!file) return;
          const ext = file?.name?.split(".")?.pop();
          if (ext !== "pdf") return alert("Select PDF file!");
          setPdf(file);
          const newBlob = URL.createObjectURL(file);
          setBlob(newBlob)
        }}
        style={{ display: "none" }}
        ref={bookref}
      />
      <center>
        <button
          onClick={() => {
            bookref?.current?.click();
          }}
          type="button"
          className="w-full bg-red-400 hover:shadow-xl transition-all duration-300"
          style={{
            background: "#ff5959",
            maxWidth: "1000px",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          Select PDF File
        </button>
        <br />
        {blob ? <embed src={blob} className="w-full" style={{maxWidth:"1000px", height:"500px", margin:"20px auto"}} /> : <span style={{fontSize:"20px"}}>No File Selected</span>}
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

export default AddNewBook;
