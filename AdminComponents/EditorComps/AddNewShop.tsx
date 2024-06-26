"use client";

import React, { useRef, useState } from "react";
import Quill from "@/Quill/Quill";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import ProductImage from "./AddComps/ProductImage";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";

const AddNewShop = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [productNo, setProductNo] = useState("");
  const [components, setComponents] = useState<any[]>([]);
  const [icon, setIcon] = useState();
  const [iconBlob, setIconBlob] = useState("");
  console.log("This is product number", productNo);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !image ||
      !title ||
      !description ||
      !content ||
      components.length < 1 ||
      !price ||
      !icon
    )
      return alert("Enter All Data");

    const newFormData: any = new FormData();
    newFormData.append("cover", image);
    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("content", content);
    newFormData.append("icon", icon);
    newFormData.append("components", JSON.stringify(components));
    newFormData.append("tags", tags);
    newFormData.append("price", price);
    newFormData.append("productNo", productNo);
    // map to images
    if (images?.length > 0) {
      const lengthOfArr = images.length;
      newFormData.append("images", lengthOfArr);
      for (let i = 0; i < lengthOfArr; i++) {
        newFormData.append(`images${i}`, images[i]);
      }
    }
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "shop");
    console.log("This is form data", formReq);
    if (formReq) {
      alert("Item Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  const compRef = useRef<any>(null);
  const iconRef = useRef<any>(null);

  const handleComps = async () => {
    const val: string = compRef?.current?.value;
    if (!val) return;
    await setComponents((prev: any) => [...prev, val]);
    return (compRef.current.value = "");
  };

  const deleteComps = async (index: number) => {
    const copyComp = [...components];
    copyComp.splice(index, 1);
    setComponents(copyComp);
  };

  const handleIcon = async (e: any) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    const ext = file?.name?.split(".")?.pop();
    const validExt = ext === "png";
    if (!validExt) return alert("Only Png Format Accepted");
    setIcon(file);
    const newBlob = URL.createObjectURL(file);
    setIconBlob(newBlob);
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
          <input
            type="text"
            value={productNo}
            onChange={(e: any) => {
              setProductNo(e?.target?.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "20px",
              fontSize: "20px",
            }}
            placeholder="Enter ProductNumber"
          />
          <br />
          <br />
          <input
            type="text"
            value={tags}
            onChange={(e: any) => {
              setTags(e?.target?.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "20px",
              fontSize: "20px",
            }}
            placeholder="Enter Tags"
          />
          <br />
          <br />
          <textarea
            value={description}
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
              resize: "none",
              height: "150px",
            }}
          />
          <br />
          <br />
          <input
            type="text"
            value={price}
            onChange={(e: any) => {
              setPrice(e?.target?.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid gray",
              borderRadius: "20px",
              fontSize: "20px",
            }}
            placeholder="Enter Price"
          />
          <br />
          <br />
          <div
            className="w-full flex text-[18px] font-semibold cursor-pointer"
            onClick={() => {
              iconRef?.current?.click();
            }}
          >
            <Image
              src={iconBlob || "/relativeImages/add.png"}
              height={75}
              width={75}
              alt=""
            />
            <h3 className="pt-[20px]">Choose Image By Clicking Here!</h3>
          </div>
          <input
            type="file"
            ref={iconRef}
            style={{ display: "none" }}
            onChange={handleIcon}
          />
        </div>
      </div>
      <br />
      <br />
      <div
        onClick={handleIcon}
        className="w-full max-w-[1000px]"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}
      >
        <div className="flex ">
          <input
            type="text"
            className="p-[15px] text-[20px]"
            placeholder="Enter Components"
            style={{ border: "2px solid gray", width: "calc(100% - 60px)" }}
            ref={compRef}
          />
          <button
            type="button"
            className="w-fit p-[20px] text-[20px] text-white bg-blue-400"
            style={{ background: "#5c9aff" }}
            onClick={handleComps}
          >
            Add
          </button>
        </div>
        {components?.map((item: any, index: number) => (
          <div
            className="w-full text-[18px] flex justify-between  bg-white"
            style={{
              marginTop: "20px",
              boxShadow: " 0 0 10px gray",
              borderRadius: "10px",
            }}
            key={index}
          >
            <span className="p-[20px]">{item}</span>
            <button
              onClick={() => {
                deleteComps(index);
              }}
              type="button"
              className="bg-red-500 p-[20px] text-white"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <Quill initial={""} contentEdit={setContent} imagesEdit={setImages} />

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

export default AddNewShop;
