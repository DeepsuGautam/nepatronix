import EditShop from "@/AdminComponents/EditorComps/EditShop";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const page = async({params}:{params:any}) => {
    const data = await getSole("shop", params?.id)
  return (
    <main style={{width:"100%", paddingTop:"80px", minHeight:"100vh", background:"aliceblue"}}>
      <section
        style={{ width: "100%", padding: "20px", margin: "0 auto", }}
      >
      <EditShop data={data}/>
      </section>
    </main>
  );
};

export default page;
