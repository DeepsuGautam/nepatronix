import Image from "next/image";
import React from "react";

const DashCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="transform p-[20px] w-[100%] max-w-[350px] rounded-3xl cursor-pointer transition-all duration-500 absolute hover:scale-105 text-center py-[50px] text-5xl
      font-semibold"
      style={{ boxShadow: "0 0 10px dimgray", background: "white" }}
    >
      <center>
        <Image src={image} width={100} height={100} alt="" />
        <br />
        {title}
      </center>
    </div>
  );
};

export default DashCard;
