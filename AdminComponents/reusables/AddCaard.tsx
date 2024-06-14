import Link from "next/link";
import React from "react";

const AddCaard = ({ type }: { type: string }) => {
  return (
    <Link href={`/admin-pannel/${type}/add-data`} className="relative">
      <button
        className="absolute shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          width: "350px",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          padding: "30px",
          fontSize: "25px",
          borderRadius: "20px",
          color: "transparent",
          background: "linear-gradient(to right, red, blue)",
          backgroundClip: "text",
          fontWeight: "600",
        }}
      >
        + Add New {type}
      </button>
    </Link>
  );
};

export default AddCaard;
