import { getLists } from "@/ApiRequest/GetData";
import ClientHolder from "@/Components/Holders/ClientHolder";
import React from "react";

const page = async () => {
  const data = await getLists("about", 0, null);

  return (
    <main
      className="w-full"
      style={{ minHeight: "100vh", paddingTop: "80px", background: "" }}
    >
      <section
        style={{
          backgroundImage: "url('/api/files/variable/aboutBg.jpg')",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "100px 0",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            color: "white",
            background: "linear-gradient(#002d58, transparent)",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <h1 className="text-8xl font-bold">Who We Are</h1>
            <br />

            <p className="text-4xl" style={{ lineHeight: "3.5rem" }}>
              {data?.content}
            </p>
          </div>
        </div>
      </section>

      <section style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        <ClientHolder cards={data?.cards} />
      </section>
    </main>
  );
};

export default page;
