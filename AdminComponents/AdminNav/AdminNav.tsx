import React from "react";
import NavLinkerBtn from "./NavLinkerBtn";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import { FaBookReader, FaSwatchbook } from "react-icons/fa";

const AdminNav = () => {
  return (
    <nav
      className="p-[20px] m-[10px] top-1/2 t rounded-3xl fixed "
      style={{
        background: "linear-gradient(red, blue)",
        boxShadow: "0 0 7.5px blue",
        transform:"translateY(-50%)",
        zIndex:"10"
      }}
    >
        {/* for dashboard */}
      <NavLinkerBtn link="/admin-pannel">
        <RiDashboardHorizontalFill />
      </NavLinkerBtn>

      {/* for edit */}
      <NavLinkerBtn link="/admin-pannel/edit-pages">
        <FaPen />
      </NavLinkerBtn>

      
      {/* for edit */}
      <NavLinkerBtn link="/admin-pannel/edit-courses">
        <FaSwatchbook/>
      </NavLinkerBtn>
      
      {/* for edit */}
      <NavLinkerBtn link="/admin-pannel/edit-classes">
        <FaBookReader/>
      </NavLinkerBtn>
    </nav>
  );
};

export default AdminNav;
