"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

const LinkMe = ({
  link,
  children
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <Link href={link} style={{maxWidth:"30rem", width:"100%"}}>
      {children}
    </Link>
  );
};

export default LinkMe;
