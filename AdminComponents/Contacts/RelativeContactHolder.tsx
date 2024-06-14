"use client";
import React, { ReactNode, useState } from "react";

const RelativeContactHolder = ({ children }: { children: ReactNode[] }) => {
  const [isOrder, setIsOrder] = useState<boolean>(true);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        top: "100px",
        padding: "10px",
        fontSize: "20px",
        background: "linear-gradient(to top, #ff2b52, #2b95ff)",
        width: "350px",
        borderRadius: "30px",
      }}
      className="shadow-xl"
    >
      <div className="flex justify-between w-full font-semibold text-gray-600">
        <button
          className="p-[10px] m-0"
          style={{
            background: isOrder ? "rgba(255, 255, 255, 0.75)" : "transparent",
            borderRadius: "20px 20px 0 0",
            width: "50%",
            transition: "0.3s",
            color: isOrder ? "#ff4d4d" : "black",
          }}
          onClick={() => {
            setIsOrder(true);
          }}
        >
          Orders
        </button>
        <button
          className="p-[10px] w-[50%] m-0 font-semibold text-gray-600"
          style={{
            background: isOrder ? "transparent" : "rgba(255, 255, 255, 0.75)",
            borderRadius: "20px 20px 0 0",
            width: "50%",
            transition: "0.3s",
            color: isOrder ? "black" : "#ff4d4d",
          }}
          onClick={() => {
            setIsOrder(false);
          }}
        >
          Contacts
        </button>
      </div>

      {/* main slide */}
      <div
        className=" relative overflow-x-hidden"
        style={{
          height: "calc(100vh - 90px - 80px - 20px)",
          width: "calc(100%)",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.75)",
          borderRadius: "0 0 20px 20px",
        }}
      >
        {isOrder ? children[0] : children[1]}
      </div>
    </div>
  );
};

export default RelativeContactHolder;
