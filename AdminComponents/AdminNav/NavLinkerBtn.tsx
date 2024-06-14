"use client";

import Link from "next/link";
import React from "react";

const NavLinkerBtn = ({ link, children }: { link: string; children: any }) => {
  return (
    <Link
      className="text-white p-[10px] hover:text-[aliceblue] transition-all duration-300 text-5xl"
      href={link}
    >
      {children}
    </Link>
  );
};

export default NavLinkerBtn;
