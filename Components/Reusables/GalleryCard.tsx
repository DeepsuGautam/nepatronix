"use client"

import Image from "next/image";
import React from "react";
import GalDes from "./GalDes";

const GalleryCard = ({ data }: { data: any }) => {
  return (
    <div
      className="rounded-2xl galParent"
      style={{
        width: "100%",
        maxWidth: "300px",
        position: "relative",
        height: "40rem",
        cursor: "pointer",
        background:"gray",
        overflow:"hidden"
      }}
    >
      <Image
        src={`/api/files${data?.image}`}
        className="rounded-2xl hover:scale-105 transition-all duration-300"
        alt=""
        width={1200}
        height={1200}
        style={{
          height: "40rem",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <GalDes data={data}/>
    </div>
  );
};
export default GalleryCard;
