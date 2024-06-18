import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import ProductCard from "../Reusables/ProductCard";

const HomeProducts = async () => {
  const data = await getLists("products", 0, 8);

  return (
    <section className="w-full py-[15px] text-[20px]  bg-[#fff4f4] text-center">
      <>
        <br />
        <br />
        <h1 className="font-bold text-8xl text-[#2e2e2e]">
          <span className="text-[#ff5050]">Our</span> Products
        </h1>
        <br />
        <br />
      </>

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {data?.map((item: any, index: number) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <>
        <br />
        <br />
        <ThemeButton style={{}} text="See All Products" link="/products" />
        <br />
        <br />
      </>
    </section>
  );
};

export default HomeProducts;
