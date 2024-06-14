import React from "react";
import ServiceHolder from "@/components/Holders/ServiceHolder";
import { getLists } from "@/ApiRequest/GetData";
import ServLoader from "@/components/Loaders/ServLoader";

const page = async () => {
  const serviceData = await getLists("services", 0);

  return (
    <main className="pt-[8rem] ">
      <ServiceHolder
        data={serviceData}
        isInfiniteScroll={false}
        isPage={true}
      />
      <ServLoader/>
    </main>
  );
};

export default page;
