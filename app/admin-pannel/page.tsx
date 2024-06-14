import DashHolder from "@/AdminComponents/AdminHolders/DashHolder";
import RelativeContactHolder from "@/AdminComponents/Contacts/RelativeContactHolder";
import React from "react";

const page = () => {
  return (
    <main
      className="w-full pt-[8rem] min-h-[100vh] relative"
      style={{ background: "aliceblue" }}
    >
      {/* contact us fixed box */}
      <RelativeContactHolder>
        <center>No Orders</center>
        <center>No Contacts</center>
      </RelativeContactHolder>

      {/* non fixwd box */}
      <DashHolder />
    </main>
  );
};

export default page;
