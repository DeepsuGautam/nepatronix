import Image from "next/image";
import React from "react";
import ThemeButton2 from "./ThemeButton2";

const ProductCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full  max-w-[350px] min-h-[500px] relative">
      <div className="absolute p-[25px] w-full h-full transition-all duration-500 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl">
        <Image
          src={data?.image}
          alt=""
          width={400}
          height={400}
          className="h-[200px] object-contain"
        />
        <br />
        <h1 className="font-bold text-[22px]">{data?.title}</h1>
        <p className="pt-5 text-[18px]" style={{maxHeight:"100px" , overflow:"hidden"}}>{data.description}</p>
        <div dangerouslySetInnerHTML={{__html: data?.content}} style={{width:0, height:0, overflow:"hidden"}}></div>
        <ThemeButton2
          link={`/products/${data?._id}`}
          text="View Details"
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            bottom: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;