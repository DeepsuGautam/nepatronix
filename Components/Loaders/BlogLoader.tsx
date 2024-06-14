"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import BlogHolder from "../Holders/BlogHolder";

const BlogLoader = () => {
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("blogs", index);
        setIndex((prev) => prev + 1);
        setData((prev: any) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);
  return <BlogHolder isPage={true} isInfiniteScroll={true} data={data} />;
};

export default BlogLoader;
