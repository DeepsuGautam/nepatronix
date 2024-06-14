import React from "react";

const AddTitle = ({ title, setTitle }: { title: string; setTitle: any }) => {
  return (
    <center>
    <input
      type="text"
      className="w-full rounded-2xl"
      placeholder="Enter Title"

      style={{
        width: "100%",
        padding: "20px",
        fontSize:"60px",
        border: "2px solid gray",
        maxWidth: "960px",
        margin:"20px auto"
      }}
      value={title}
      onChange={(e: any) => {
        setTitle(e?.target?.value);
      }}
    />
    </center>
  );
};

export default AddTitle;
