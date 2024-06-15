import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("books", params?.id);
  return (
    <main
      className="min-h-[100vh] pt-[80px]"
      style={{ paddingTop: "80px", position: "relative" }}
    >
      <embed
        src={`/api/files${data?.content}`}
        type=""
        style={{
          width: "100%",
          height: "calc(100% - 80px)",
          position: "absolute",
        }}
      />
    </main>
  );
};

export default page;
