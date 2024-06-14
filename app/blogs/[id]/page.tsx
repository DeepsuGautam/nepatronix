import { getSole } from "@/ApiRequest/GetData";
import DescriptionBlog from "@/Components/BlogPage/DescriptionBlog";
import TopBlog from "@/Components/BlogPage/TopBlog";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("blogs", params?.id);
  return (
    <main className="min-h-[100vh] pt-[80px]" style={{ paddingTop: "80px" }}>
      {/* top part */}
      <TopBlog image={data?.image} />
      <br />
      <br />
      <br />

      {/* h1 */}
      <h1
        style={{
          width: "100%",
          padding: "20px",
          fontSize: "60px",
          fontWeight: "600",
          maxWidth: "1000px",
          margin: "0 auto",
          color: "#303030",
          height: "fit-content",
          lineHeight: "70px",
        }}
      >
        {data?.title}
      </h1>

      {/* description  */}
      <DescriptionBlog des={data?.description} />

      {/* main content */}
      <div
        style={{
          maxWidth: "1000px",
          padding: "20px",
          width: "calc(100% - 40px)",
          fontSize: "18px",
          margin: "0 auto",
        }}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
    </main>
  );
};

export default page;
