import { getSole } from "@/ApiRequest/GetData";
import LinkingBack from "@/Components/Reusables/LinkingBack";
import ShopForm from "@/Components/ShopForm/ShopForm";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("shop", params?.id);

  return (
    <main
      className="min-h-[100vh] pt-[80px]"
      style={{ paddingTop: "80px", background: "aliceblue" }}
    >
      <section
        className="w-full"
        style={{ maxWidth: "1400px", padding: "20px 20px", margin: "0 auto" }}
      >
        {/* back to products */}
        <LinkingBack link="/shop" text="Back To Shop" />
        <br />
        <br />
        <div
          className="w-full flex flex-wrap justify-around bg-white px-[40px] py-[100px] rounded-2xl"
          style={{ gap: "20px", boxShadow: "0 0 5px gray" }}
        >
          <div className="w-fit flex flex-col justify-center flex-wrap">
            <Image
              src={`/api/files${data?.image}`}
              alt=""
              width={500}
              height={500}
              style={{
                width: "350px",
                height: "fit-content",
                objectFit: "contain",
                objectPosition: "center",
                padding: "20px",
                background: "white",
                border: "2px solid gray",
                borderRadius: "10px",
                boxShadow: "0 0 10px gray",
              }}
            />
          </div>

          <div
            className=""
            style={{
              width: "50%",
              fontSize: "20px",
              minWidth: "350px",
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
            <br/>
            <p>{data?.description}</p>
            <br />
            <h1
              className="text-orange-500"
              style={{
                fontSize: "30px",
                lineHeight: "50px",
                fontWeight: "600",
              }}
            >
              Rs.{data?.price}
            </h1>
            <ShopForm itemData={data}/>
          </div>
        </div>
        <br />

        <h1
          style={{
            fontSize: "40px",
            lineHeight: "50px",
            fontWeight: "600",
            padding: "10px 20px",
          }}
        >
          Item Details
        </h1>
        <div
          style={{ fontSize: "20px", padding: "0px 20px" }}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
      </section>
    </main>
  );
};

export default page;
