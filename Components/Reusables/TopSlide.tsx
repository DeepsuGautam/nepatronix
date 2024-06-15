import Image from "next/image";
import React from "react";
import ThemeButton from "./ThemeButton";

interface slideDataType {
  image: string;
  bg: string;
  button1: any;
  button2: any;
  title: string;
  content: string;
}

const TopSlide = ({
  slideData,
  width,
}: {
  slideData: slideDataType;
  width: string;
}) => {
  const { image, bg, button1, button2, title, content }: slideDataType =
    slideData;

  return (
    <div
      className="flex relative flex-wrap-reverse text-center justify-around gap-[5rem] sm:gap-0"
      style={{ width, background: bg }}
    >
      {/* for image */}
      <div className="w-[100%] sm:w-[50%] sm:relative">
        {/* image */}
        <Image
          src={`/api/files${image}`}
          alt=""
          width={2000}
          height={1200}
          className="w-[calc(100%)] p-[5rem] text-center sm:absolute sm:top-[50%] sm:translate-y-[-50%]"
        />
      </div>

      {/* for content */}
      <div className="w-[100%] h-fit pt-[3.5rem] sm:w-[50%] sm:relative sm:h-[calc(100%)] sm:pt-0">
        <div className="w-[calc(100%)] p-[5rem] text-center sm:absolute sm:top-[50%] sm:translate-y-[-50%]">
          {/* text */}
          <h1 className="text-6xl text-black font-bold">{title}</h1>
          <br />
          <br />
          <p className="text-4xl text-[#555555] font-semibold">{content}</p>
          <br />
          <br />
          <div className="w-[100%] gap-[2rem] flex justify-center">
            {button1 ? (
              <ThemeButton style={{}} link={button1.link} text={button1.text} />
            ) : (
              ""
            )}
            {button2 ? (
              <ThemeButton style={{}} link={button2.link} text={button2.text} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlide;
