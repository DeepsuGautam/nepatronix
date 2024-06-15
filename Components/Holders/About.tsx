import React from "react";
import ClientHolder from "./ClientHolder";

const About = ({ data }: { data: any }) => {
  return (
    <section
      className="w-full h-fit"
      style={{
        backgroundImage: "url('/api/files/variable/aboutBg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="w-full h-fit bg-gradient-to-b from-[#002d58] to-transparent text-left text-white text-[20px]"
        style={{
          padding: "80px 20px",
          minHeight: "calc(100vh - 80px)",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign:"center"
          }}
        >
          <b className="text-red-500">ABOUT US</b>
          <br />
          <br />
          <h1 className="text-8xl font-bold">Who We Are</h1>
          <br />

          <p className="text-4xl" style={{ lineHeight: "3.5rem" }}>
            {data?.content}
          </p>
          <ClientHolder cards={data?.cards} />
        </div>
      </div>
    </section>
  );
};

export default About;
