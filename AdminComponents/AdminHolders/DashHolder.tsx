import React from "react";

import Cards from "../AdminJsons/dashCardJson.json";
import DashCard from "../DashBoardTopCard/DashCard";
import LinkAdminCards from "../reusables/LinkAdminCards";

const DashHolder = () => {
  return (
    <div
      className="p-[20px] min-w-[350px] flex justify-evenly flex-wrap"
      style={{
        width: "calc(100% - 340px - 200px)",
        margin: "20px 150px",
        gap: "30px",
      }}
    >
      {/* use cards */}
      {Cards.map(
        ({ title, link, image }: { title: string; link: string; image:string }, index: number) => (
          <LinkAdminCards link={link} key={index} addiStyle={{ height: "275px" }}>
            <DashCard image={image} title={title} />
          </LinkAdminCards>
        )
      )}
    </div>
  );
};

export default DashHolder;
