import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import BlogCard from "../Reusables/BlogCard";

const HomeBlog = async () => {
  const data = await getLists("blogs", 0, 18);

  return (
    <section className="w-full py-[15px] text-[20px]  bg-gradient-to-l from-red-200 to-blue-200 text-center">
      <>
          <br />
          <br />
          <h1 className="font-bold text-8xl text-[#2c1b3d]">
            Explore Our Blogs
          </h1>
          <br />
          <br />
        </>

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {data?.map((item: any, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
      <>
        <br />
        <br />
        <ThemeButton style={{}} text="See All Services" link="/services" />
        <br />
        <br />
      </>
    </section>
  );
};

export default HomeBlog;
