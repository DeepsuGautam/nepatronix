import { getLists } from "@/ApiRequest/GetData";
import ShopHolder from "@/Components/Holders/ShopHolder";
import ProductLoader from "@/Components/Loaders/ProductLoader";
import React from "react";

const page = async () => {
  const productData = await getLists("shop", 0, null);

  return (
    <main className="pt-[8rem]">
      <ShopHolder data={productData} isInfiniteScroll={false} isPage={true} />
      <ProductLoader />
    </main>
  );
};

export default page;
