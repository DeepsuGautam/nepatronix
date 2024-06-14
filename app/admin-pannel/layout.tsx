import AdminNav from "@/AdminComponents/AdminNav/AdminNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
};

export default layout;
