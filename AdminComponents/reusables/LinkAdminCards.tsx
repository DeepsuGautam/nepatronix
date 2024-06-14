import Link from "next/link";
import React, { ReactNode } from "react";

const LinkAdminCards = ({
  link,
  children,
  addiStyle,
}: {
  link: string;
  children: ReactNode;
  addiStyle: any;
}) => {
  return (
    <Link href={link} style={addiStyle} className=" w-[100%] max-w-[350px] ">
      {children}
    </Link>
  );
};

export default LinkAdminCards;
