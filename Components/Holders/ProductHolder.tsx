import React from "react";
import ProductCard from "../Reusables/ProductCard";
import LinkData from "../Reusables/LinkData";
import { FaAngleRight } from "react-icons/fa";

const ProductHolder = ({
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
            <span className="text-[#ff5050]">Our</span> Products
          </h1>
          <br />
          <br />
        </>
      )}

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {data?.map((item: any, index: number) => (
          <ProductCard key={index} data={item} />
        ))}

        {!isPage && (
          <LinkData link="/products">
            <div className="absolute p-[20px] w-full h-full shadow-lg transition-all duration-500 bg-white cursor-pointer hover:shadow-xl hover:scale-105 rounded-2xl">
              <div
                className="absolute top-[50%] left-[50%] p-[20px]  bg-gradient-to-r from-red-500 to-blue-500   bg-clip-text text-center"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <FaAngleRight className="text-8xl pl-[20px]" />
                See More
              </div>
            </div>
          </LinkData>
        )}
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

export default ProductHolder;
