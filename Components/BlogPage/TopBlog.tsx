import Image from "next/image";
import React from "react";

const TopBlog = ({
  image,
}: {
  image: string;
}) => {
  return (
    <section className="w-full min-h-[700px] text-center flex justify-evenly flex-wrap gap-[30px] bg-gradient-to-r from-blue-500 to-red-400 animate-gradient-move">
      {/* for image */}
      <div className="">
        <Image
          src={`/api/files${image}`}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[600px] object-contain object-center mt-[50px]"
        />
      </div>
    </section>
  );
};

export default TopBlog;
