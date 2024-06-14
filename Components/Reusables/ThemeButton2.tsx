"use client";

import Link from "next/link";
import React from "react";

const ThemeButton2 = ({ link, text, style }: { link: string; text: string, style:any }) => {
  return (
    <Link href={link}>
      <button
        style={style}
        className="p-[10px] text-[16px] bg-[#ff5858] text-white rounded-2xl transition duration-500 shadow-md hover:shadow-lg transform hover:animate-gradient-slide"
      >
        {text}
      </button>
    </Link>
  );
};

export default ThemeButton2;
