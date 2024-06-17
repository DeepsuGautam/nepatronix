import React from "react";
import dynamic from "next/dynamic";
import HomeServ from "@/Components/homeComps/HomeServ";
import HomeProducts from "@/Components/homeComps/HomeProducts";

const SlideHolder = dynamic(() => import("@/Components/Slide/SlideHolder"));
const About = dynamic(() => import("@/Components/Holders/About"));
const ProductHolder = dynamic(
  () => import("@/Components/Holders/ProductHolder")
);
const Video = dynamic(() => import("@/Components/HomeVideo/Video"));
const BlogHolder = dynamic(() => import("@/Components/Holders/BlogHolder"));
const BookHolder = dynamic(() => import("@/Components/Holders/BookHolder"));
const page = async () => {
  return (
    <main className="mainBox">
      {/* pages */}
      <SlideHolder />

      <About />

      {/* making service section */}
      <HomeServ />

      {/* making product */}
      <HomeProducts />

      {/* show video */}
      <Video />

      <BlogHolder
        isInfiniteScroll={false}
        isPage={false}
        data={homeData?.blogs}
      />

      <BookHolder
        isInfiniteScroll={false}
        isPage={false}
        data={homeData?.books}
      />
    </main>
  );
};

export default page;
