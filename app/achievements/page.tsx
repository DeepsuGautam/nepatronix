import { getLists } from "@/ApiRequest/GetData";
import EventsHolder from "@/Components/Holders/EventsHolder";
import React from "react";

const page = async() => {
  const data = await getLists("achievements", 0 ,null)
  return (
    <main className="min-h-screen pt-[80px] pb-[80px] text-center">
      <EventsHolder data={data}/>        
    </main>
  );
};

export default page;
