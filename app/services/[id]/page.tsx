import { getSole } from "@/ApiRequest/GetData";
import DescriptionServ from "@/components/ServPage/DescriptionServ";
import TopService from "@/components/ServPage/TopService";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("services", params?.id);
  return (
    <main className="min-h-[100vh] pt-[80px]" style={{ paddingTop: "80px" }}>
      {/* top part */}
      <TopService title={data?.title} image={data?.image} />

      {/* description  */}
      <DescriptionServ des={data?.description} />

      {/* main content */}
      <div
      style={{
        maxWidth:"1000px",
        padding:"20px",
        width:"calc(100% - 40px)",
        fontSize:"18px",
        margin:"0 auto"
      }}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
    </main>
  );
};

export default page;
