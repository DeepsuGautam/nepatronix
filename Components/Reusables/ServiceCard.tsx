import Image from "next/image";
import React from "react";

const ServiceCard = ({ data }: { data: any }) => {
  console.log(data?.image)
  return (
    <div className="absolute w-full max-w-[350px] h-full min-h-[480px] p-[4rem] bg-[#f5faff] rounded-2xl shadow-lg  hover:shadow-2xl transition-all duration-500 text-center cursor-pointer hover:scale-105">
      <Image
        src={data?.image}
        alt=""
        width={200}
        height={200}
        className="object-contain w-[100%] h-[100px] mx-auto"
      />
      <br />
      <h1 className="font-bold text-[22px] text-black">{data?.title}</h1>
      <br />
      <p className="text-[18px]" style={{height:"150px", overflow:"hidden"}}>{data?.description}</p>
      <div style={{width:"0", height:"0", overflow:"hidden"}} dangerouslySetInnerHTML={{__html:data?.content}}></div>
    </div>
  );
};

export default ServiceCard;
