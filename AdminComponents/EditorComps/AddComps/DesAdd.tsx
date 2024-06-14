import React from "react";

const DesAdd = ({
  description,
  setDescription,
}: {
  description: string;
  setDescription: any;
}) => {
  return (
    <div className="w-full p-[20px] mx-auto" style={{ maxWidth: "1000px" }}>
      <textarea
        value={description}
        onChange={(e: any) => {
          setDescription(e?.target?.value);
        }}
        className="w-full h-[200px] p-[20px] rounded-2xl overflow-y-auto resize-none"
        placeholder="Enter Description"
        style={{ resize: "none", fontSize: "22px", border: "2px solid gray" }}
      />
    </div>
  );
};

export default DesAdd;
