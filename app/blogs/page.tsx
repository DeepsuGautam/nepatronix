import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import BlogHolder from "@/components/Holders/BlogHolder";
import BlogLoader from "@/components/Loaders/BlogLoader";

const page = async () => {
  const serviceData = await getLists("blogs", 0);

  return (
    <main className="pt-[8rem] ">
      <BlogHolder
        data={serviceData}
        isInfiniteScroll={false}
        isPage={true}
      />
      <BlogLoader/>
    </main>
  );
};

export default page;
