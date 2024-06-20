import React from "react";
import ShopCard from "../Reusables/ShopCard";

const ShopHolder = ({
  data,
  isPage,
  isInfiniteScroll,
}: {
  data: any;
  isPage: boolean;
  isInfiniteScroll: boolean;
}) => {
  return (
    <section className="w-full py-[15px] text-[20px]  bg-[#fff4f4] text-center">
      {!isInfiniteScroll && (
        <>
          <br />
          <br />
          <h1 className="font-bold text-8xl text-[#2e2e2e]">
            <span className="text-blue-900">Shop</span>
          </h1>
          <br />
          <br />
        </>
      )}

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {data?.map((item: any, index: number) => (
          <ShopCard key={index} data={item} />
        ))}
      </div>
      {!isPage && !isInfiniteScroll && (
        <>
          <br />
          <br />
        </>
      )}
    </section>
  );
};

export default ShopHolder;
