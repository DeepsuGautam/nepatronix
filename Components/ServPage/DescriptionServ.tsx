import React from "react";
import LinkingBack from "../Reusables/LinkingBack";

const DescriptionServ = ({ des }: { des: string }) => {
  return (
    <section className="w-full max-w-[calc(1000px-40px)] py-[50px]  mx-auto">
      <LinkingBack link="/services" text="Back To Services" />
      <br/>
      <br/>

      <p className="text-5xl" style={{ lineHeight: "4.5rem" }}>
        {des}
      </p>
    </section>
  );
};

export default DescriptionServ;
