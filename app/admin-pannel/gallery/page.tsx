import InfiniteCardHolder from "@/AdminComponents/AdminHolders/InfiniteCardHolder";
import PreCardHolder from "@/AdminComponents/AdminHolders/PreCardHolder";
import AddCaard from "@/AdminComponents/reusables/AddCaard";
import React from "react";

const page = async () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        background: "aliceblue",
        textAlign: "center",
      }}
    >
      <br />
      <br />
      <h1 className="text-8xl font-bold" style={{ color: "#1b2d40" }}>
        Edit Gallery
      </h1>
      <br />
      <br />
      <br />
      {/* pre card */}
      <AddCaard type={"gallery"}/>
      
      <br />
      <br />
      <br />
      <PreCardHolder type="gallery" />
      <InfiniteCardHolder type="gallery" />
    </main>
  );
};

export default page;
