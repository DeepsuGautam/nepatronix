import Image from "next/image";
import React from "react";

const TopService = ({
  image,
  title
}: {
  image: string;
  title: string;
}) => {
  return (
    <section className="w-full min-h-[500px] text-center flex justify-evenly flex-wrap gap-[30px] bg-gradient-to-r from-blue-500 to-red-400 animate-gradient-move">
      {/* for image */}
      <div className="w-fit flex flex-col justify-center">
        <Image
          src={`/api/files${image}`}
          alt=""
          width={300}
          height={300}
          className="object-contain object-center"
        />
      </div>
      <div className="w-fit flex flex-col justify-center">
        <h1 className="min-w-[350px] p-[20px] text-9xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default TopService;
