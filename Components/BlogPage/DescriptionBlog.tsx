import React from "react";
import LinkingBack from "../Reusables/LinkingBack";

const DescriptionBlog = ({ des }: { des: string }) => {
  return (
    <section className="w-full max-w-[calc(1000px-40px)] py-[50px]  mx-auto">
      <LinkingBack link="/blogs" text="Back To Blogs" />
      <br/>
      <br/>

      <p className="text-5xl" style={{ lineHeight: "4.5rem" }}>
        {des}
      </p>
    </section>
  );
};

export default DescriptionBlog;
