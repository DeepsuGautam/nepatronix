"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SlideHolder = ({
  children,
  length,
}: {
  children: ReactNode;
  length: number;
}) => {
  const [index, setIndex] = useState(0);

  const ref: any | null = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      return ref?.current.click();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="w-full overflow-x-hidden sm:overflow-hidden relative h-fit min-h-[100vh] pt-[8rem]">
      <div
        className={`absolute min-h-[calc(100vh-8rem)] flex`}
        style={{
          width: `calc(100% * ${length})`,
          transition: "1.5s",
          left: `calc(-100% * ${index})`,
        }}
      >
        {children}
      </div>
      <button
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 left-0 hover:text-red-500"
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => prev - 1);
          } else {
            setIndex(length - 1);
          }
        }}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 right-0 hover:text-red-500"
        onClick={() => {
          if (index < length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        ref={ref}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default SlideHolder;
