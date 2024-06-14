"use client";

import Link from "next/link";
import React from "react";

const ThemeButton = ({ link, text, style }: { link: string; text: string, style:any }) => {
  return (
    <Link href={link}>
      <button style={style} className="p-[10px] text-[16px] bg-gradient-to-r from-[#ff4343] to-[#3c3cff] text-white rounded-2xl transition duration-500 shadow-md hover:shadow-lg transform hover:scale-105">
        {text}
      </button>
    </Link>
  );
};

export default ThemeButton;
