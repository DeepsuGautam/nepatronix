import React from "react";
import NavLinkerBtn from "./NavLinkerBtn";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const AdminNav = () => {
  return (
    <nav
      className="p-[20px] mx-[10px] top-1/2 rounded-3xl fixed "
      style={{
        background: "linear-gradient(red, blue)",
        boxShadow: "0 0 7.5px blue",
        transform:"translateY(-50%)",
        zIndex:"10",
        left:"10px"
      }}
    >
        {/* for dashboard */}
      <NavLinkerBtn link="/admin-pannel">
        <RiDashboardHorizontalFill />
      </NavLinkerBtn>
    </nav>
  );
};

export default AdminNav;
