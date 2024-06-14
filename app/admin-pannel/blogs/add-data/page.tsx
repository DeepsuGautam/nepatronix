import AddNewBlog from "@/AdminComponents/EditorComps/AddNewBlog";
import React from "react";

const page = () => {
  return (
    <main style={{width:"100%", paddingTop:"80px", minHeight:"100vh", background:"aliceblue"}}>
      <section
        style={{ width: "100%", padding: "20px", margin: "0 auto", }}
      >
      <AddNewBlog/>
      </section>
    </main>
  );
};

export default page;
