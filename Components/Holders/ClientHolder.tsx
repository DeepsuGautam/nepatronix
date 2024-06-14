import React from "react";
import AbtCard from "../Reusables/AbtCard";

const ClientHolder = ({ cards }: { cards: any[] }) => {
  return (
    <div
      className="flex flex-wrap justify-around"
      style={{
        width: "100%",
        height: "fit-content",
        padding: "50px 20px",
        gap: "30px",
      }}
    >
      {Array.isArray(cards) &&
        cards?.map((item: any, index: number) => (
          <AbtCard key={index} data={item} />
        ))}
    </div>
  );
};

export default ClientHolder;
