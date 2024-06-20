import EditAchievements from "@/AdminComponents/EditorComps/EditAchievements";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const page = async({params}:{params:any}) => {
  console.log(params)
  const data = await getSole("achievements", params?.id)
  
  return (
    <main style={{width:"100%", paddingTop:"80px", minHeight:"100vh", background:"aliceblue"}}>
      <section
        style={{ width: "100%", padding: "20px", margin: "0 auto", }}
      >
      <EditAchievements data={data}/>
      </section>
    </main>
  );
};

export default page;
