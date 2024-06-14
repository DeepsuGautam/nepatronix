import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const LinkingBack = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      href={link}
      className="flex justify-center py-[10px] w-fit text-4xl font-semibold text-blue-500 mt-[20px]"
    >
      <FaAngleLeft className="mt-[0.25rem]" /> &nbsp; {text}
    </Link>
  );
};

export default LinkingBack;
