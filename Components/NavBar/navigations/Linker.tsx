import Link from "next/link";
import React from "react";

const Linker = ({ link, child}: { link: string; child: any; }) => {

  const isTrue:boolean =  link !== "/blogs" && link !== "/books" && link !== "/" && link !== "/gallery" && link !== "/contact" && link !== "/shop" 

  return (
    <Link
      href={link}
      style={{
        zIndex: "10",
        textAlign:"center"
      }}
      className={isTrue?"subLinker":""}
    >
      {child}
    </Link>
  );
};

export default Linker;
