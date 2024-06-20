import AddSlide from "@/AdminComponents/Cards/AddSlide";
import SlideEditor from "@/AdminComponents/Cards/SlideEditor";
import { getLists } from "@/ApiRequest/GetData";
import React from "react";

const page = async () => {
  const data = await getLists("slides", 0, null);
  return (
    <main className="w-full pt-[160px] pb-[80px] min-h-screen">
      <center>
        <h1 className="text-8xl text-blue-800 font-bold">Edit Slides</h1>
        <br />
        <AddSlide/>
        {data?.map((item:any, index:number)=>(
            <SlideEditor key={index} data={item}/>
        ))}
      </center>
    </main>
  );
};

export default page;
