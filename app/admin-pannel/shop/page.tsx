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
        Edit shop
      </h1>
      <br />
      <br />
      <br />
      {/* pre card */}
      <AddCaard type={"shop"}/>
      
      <br />
      <br />
      <br />
      <PreCardHolder type="shop" />
      <InfiniteCardHolder type="shop" />
    </main>
  );
};

export default page;
