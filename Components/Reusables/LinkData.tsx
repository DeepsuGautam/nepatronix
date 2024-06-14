"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

const LinkData = ({
  link,
  children
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <Link href={link} className=" relative w-full min-h-[480px] max-w-[350px]">
      {children}
    </Link>
  );
};

export default LinkData;
