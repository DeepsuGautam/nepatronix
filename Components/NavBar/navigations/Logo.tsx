import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={`/mainImages/logo.png`}
      height={200}
      width={800}
      alt=""
      className="w-auto mr-[20px]"
      style={{
        zIndex:'10',
        height:"50px"
      }}
    />
  );
};

export default Logo;
