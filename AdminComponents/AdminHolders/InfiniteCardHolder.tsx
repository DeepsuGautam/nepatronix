"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import EditableCard from "../Cards/EditableCard";

const InfiniteCardHolder = ({ type }: { type: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const newData = await getLists(type, index, null);
      if (Array.isArray(newData) && newData.length > 0) {
        setIndex((prev: number) => prev + 1);
        setData((prev: any[]) => [...prev, ...newData]);
      }
    };

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        getData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [type, index]);

  return (
    <div
      className="w-[80%] py-[20px] flex flex-wrap justify-center mx-auto"
      style={{ gap: "40px" }}
    >
      {data?.map((data: any, index: number) => (
        <EditableCard data={data} key={index} type={type} />
      ))}
    </div>
  );
};

export default InfiniteCardHolder;
