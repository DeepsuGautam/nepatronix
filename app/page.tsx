import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports for all components
const HomeServ = dynamic(() => import("@/Components/homeComps/HomeServ"));
const HomeProducts = dynamic(() => import("@/Components/homeComps/HomeProducts"));
const HomeBlog = dynamic(() => import("@/Components/homeComps/HomeBlog"));
const HomeBook = dynamic(() => import("@/Components/homeComps/HomeBook"));
const SlideHolder = dynamic(() => import("@/Components/Slide/SlideHolder"));
const About = dynamic(() => import("@/Components/Holders/About"));
const Video = dynamic(() => import("@/Components/HomeVideo/Video"));

const Page = async () => {
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

      <HomeBlog />
      <HomeBook />
    </main>
  );
};

export default Page;