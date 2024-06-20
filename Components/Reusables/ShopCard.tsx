import Image from "next/image";
import React from "react";
import ThemeButton2 from "./ThemeButton2";

const ShopCard = ({ data }: { data: any }) => {
  return (
    <div
      className="w-full max-w-[350px] min-h-[650px] text-white relative"
      style={{ borderRadius: "35px" }}
    >
      <div
        className="w-full bg-[#7873f4] flex flex-wrap py-[40px] p-[20px] gap-[20px] h-[175px] shadow-xl"
        style={{ borderRadius: "35px", position: "absolute" }}
      >
        <Image
          src={`/api/files${data?.icon}`}
          width={100}
          height={100}
          alt=""
          style={{
            width: "100px",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        <div style={{ width: "140px", textAlign: "center" }}>
          <h1 className="font-bold text-[25px]">{data?.title}</h1>
          <p className="text-[18px]">Product No: {data?.productNo} </p>
        </div>
      </div>

      <div
        className="bg-[#c4ec65]"
        style={{
          width: "95%",
          height: "650px",
          paddingTop: "200px",
          margin: "0 auto",
          borderRadius: "35px",
          boxShadow: "0 0 5px gray",
        }}
      >
        <div className="w-full text-left text-black px-[20px]">
          <b>Components Used :</b>
          <ul
            className="customScroll"
            style={{
              padding: "10px",
              height: "280px",
              overflowY: "scroll"
            }}
          >
            {data?.components?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <ThemeButton2
          link={`/shop/${data?._id}`}
          text="Order Now"
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            background: "#7873f4",
            width: "80%",
            margin: "0 auto",
            borderRadius: "35px",
            bottom: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default ShopCard;
