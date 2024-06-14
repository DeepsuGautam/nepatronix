import React from "react";
import dynamic from "next/dynamic";

const SlideHolder = dynamic(() => import("@/Components/Slide/SlideHolder"));
const About = dynamic(()=>import("@/Components/Holders/About"))
const TopSlide = dynamic(() => import("@/Components/Reusables/TopSlide"));
const ServiceHolder = dynamic(
  () => import("@/Components/Holders/ServiceHolder")
);
const ProductHolder = dynamic(
  () => import("@/Components/Holders/ProductHolder")
);
const Video = dynamic(() => import("@/Components/HomeVideo/Video"));
const BlogHolder = dynamic(() => import("@/Components/Holders/BlogHolder"));
const BookHolder = dynamic(()=> import("@/Components/Holders/BookHolder"))

const BACKEND_URL = process.env.NEXT_APP_BACKEND;

const Home = async () => {
  const res = await fetch(`${BACKEND_URL}/api/v1`, { cache: "no-store" });
  const homeData = await res.json();

  return (
    <main className="mainBox">
      {/* pages */}
      <SlideHolder length={homeData?.slides?.length}>
        <div
          className="innerSlide"
          style={{
            width: "100%",
            minHeight: "calc(100vh - 8rem)",
            display: "flex",
          }}
        >
          {homeData?.slides?.map((data: any, index: number) => (
            <TopSlide
              slideData={data}
              width={`calc(100% / ${homeData?.slides?.length})`}
              key={index}
            />
          ))}
        </div>
      </SlideHolder>



      <About data={homeData?.about}/>

      {/* making service section */}
      <ServiceHolder
        isInfiniteScroll={false}
        isPage={false}
        data={homeData?.services}
      />

      {/* making product */}
      <ProductHolder
        isInfiniteScroll={false}
        isPage={false}
        data={homeData?.products}
      />

      {/* show video */}
      <Video />

      <BlogHolder
        isInfiniteScroll={false}
        isPage={false}
        data={homeData?.blogs}
      />

      <BookHolder isInfiniteScroll={false} isPage={false} data={homeData?.books}/>
    </main>
  );
};

export default Home;
