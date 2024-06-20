"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import ShopHolder from "../Holders/ShopHolder";

const ShopLoader = () => {
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("shop", index, 12);
        setIndex((prev) => prev + 1);
        setData((prev: any) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);
  return <ShopHolder isPage={true} isInfiniteScroll={true} data={data} />;
};

export default ShopLoader;
