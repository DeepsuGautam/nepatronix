"use client";
import React, { useEffect, useRef, useState } from "react";

const AbtCard = ({ data }: { data: { title: string; value: number } }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [num, setNum] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const finalVal: number = data.value;
      const duration: number = 1500; // 2.5 seconds
      const increment: number = finalVal / (duration / 100); // increment value for each interval
      let currentNum: number = 0;

      const interval = setInterval(() => {
        currentNum += increment;
        if (currentNum >= finalVal) {
          currentNum = finalVal;
          clearInterval(interval);
        }
        setNum(Math.round(currentNum));
      }, 100); // update every 100ms

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, data.value]);

  return (
    <div
      ref={cardRef}
      className="w-fit text-center flex flex-col justify-center h-fit p-8 rounded-full bg-white bg-opacity-65 text-red-500 shadow-2xl"
      style={{ width: "20rem", height: "20rem" }}
    >
      <h1 className="text-6xl font-bold">+{num}</h1>
      <h2 className="text-2xl font-semibold mt-4 text-[#143269]">
        {data?.title}
      </h2>
    </div>
  );
};

export default AbtCard;
