"use client";

import { DelData } from "@/ApiRequest/DeleteReqs";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteBtn = ({ type, id }: { type: string; id: string }) => {
  return (
    <button
      className="bg-red-500 text-white text-4xl rounded-2xl"
      style={{ padding: "10px", height: "fit-content" }}
      onClick={async () => {
        const confirm = window.confirm("Delete This Item?");
        if (!confirm) return;
        const del = await DelData(type, id);
        if (!del) return alert("Data Not Deleted");
        alert("Data Deleted Sccessfully");
        return window.location.reload();
      }}
    >
      <FaTrash />
    </button>
  );
};

export default DeleteBtn;
