"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TopSlide from "../Reusables/TopSlide";

const SlideHolder = () => {
  const [index, setIndex] = useState(0);

  const ref: any | null = useRef(null);
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData =async()=>{
      const setDatas = await getLists("slides", 0, 0);
      return setData(setDatas);
    }
    getData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      return ref?.current.click();
    }, 5000);

    if (data?.length > 0) {
      return () => {
        clearInterval(interval);
      };
    }
  }, [data]);

  return (
    <section className="w-full overflow-x-hidden sm:overflow-hidden relative h-fit min-h-[100vh] pt-[8rem]">
      <div
        className={`absolute min-h-[calc(100vh-8rem)] flex`}
        style={{
          width: `calc(100% * ${data?.length})`,
          transition: "1.5s",
          left: `calc(-100% * ${index})`,
        }}
      >
        <div
          className="innerSlide"
          style={{
            width: "100%",
            minHeight: "calc(100vh - 8rem)",
            display: "flex",
          }}
        >
          {data?.map((data: any, index: number) => (
            <TopSlide
              slideData={data}
              width={`calc(100% / ${data?.length})`}
              key={index}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 left-0 hover:text-red-500"
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => prev - 1);
          } else {
            setIndex(data?.length - 1);
          }
        }}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 right-0 hover:text-red-500"
        onClick={() => {
          if (index < data?.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        ref={ref}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default SlideHolder;
