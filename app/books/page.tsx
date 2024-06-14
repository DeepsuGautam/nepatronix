import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import BookHolder from "@/Components/Holders/BookHolder";
import BookLoader from "@/Components/Loaders/BookLoader";

const page = async () => {
  const serviceData = await getLists("books", 0);

  return (
    <main className="pt-[8rem] ">
      <BookHolder
        data={serviceData}
        isInfiniteScroll={false}
        isPage={true}
      />
      <BookLoader/>
    </main>
  );
};

export default page;
