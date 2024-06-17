import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import EditableCard from "../Cards/EditableCard";

const PreCardHolder = async ({ type }: { type: string }) => {
  const data = await getLists(type, 0, 18);

  return (
    <div
      className="w-[80%] py-[20px] flex flex-wrap justify-center gap-[20px] mx-auto"
      style={{ gap: "40px" }}
    >
      {data?.map((data: any, index: number) => (
        <EditableCard data={data} key={index} type={type} />
      ))}
    </div>
  );
};

export default PreCardHolder;
