"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import ServiceHolder from "../Holders/ServiceHolder";

const ServLoader = () => {
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("services", index, 12);
        setIndex((prev) => prev + 1);
        setData((prev: any) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);
  return <ServiceHolder isPage={true} isInfiniteScroll={true} data={data} />;
};

export default ServLoader;
