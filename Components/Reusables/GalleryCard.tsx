import Image from "next/image";
import React from "react";

const GalleryCard = ({ data }: { data: any }) => {
  return (
    <div
      className="rounded-2xl"
      style={{
        width: "100%",
        maxWidth: "500px",
        position: "relative",
        height: "700px",
        cursor: "pointer",
        background:"gray"
      }}
    >
      <Image
        src={`/api/files${data?.image}`}
        className="rounded-2xl hover:scale-105 transition-all duration-300"
        alt=""
        width={1200}
        height={1200}
        style={{
          height: "700px",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      <div style={{ width: "0", height: "0", overflow: "hidden" }}>
        {data?.description}
      </div>
    </div>
  );
};
export default GalleryCard;
