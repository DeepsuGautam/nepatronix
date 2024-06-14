import { getSole } from "@/ApiRequest/GetData";
import LinkingBack from "@/components/Reusables/LinkingBack";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("products", params?.id);

  return (
    <main className="min-h-[100vh] pt-[80px]" style={{ paddingTop: "80px", background:"aliceblue" }}>
      <section
        className="w-full"
        style={{ maxWidth: "1000px", padding: "20px 20px", margin: "0 auto" }}
      >
        {/* back to products */}
        <LinkingBack link="/products" text="Back To Products" />
        <br/><br/>
          <Image
            src={data?.image}
            alt=""
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center",
            }}
            />

            <br/>

          <div
            className=""
            style={{
              width: "100%",
              fontSize: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                lineHeight: "50px",
                fontWeight: "600",
              }}
            >
              {data?.title}
            </h1>
            <p>{data?.description}</p>
          </div>

          <div
            style={{ fontSize: "20px", paddingTop: "50px" }}
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></div>
      </section>
    </main>
  );
};

export default page;
