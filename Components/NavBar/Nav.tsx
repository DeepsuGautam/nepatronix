import React from "react";
import "./nav.css";
import Linker from "./navigations/Linker";
import Logo from "./navigations/Logo";
import { RiMenu3Line } from "react-icons/ri";

const Nav = () => {
  return (
    <header className="bg-white fixed h-[80px] p-[15px] top-0 left-0 right-0 flex  justify-between z-[10] xl:pl-[8rem] xl:pr-[8rem] mainNav">
      {/* first components */}
      <nav className="w-fit h-fit gap-[25px] flex">
        {/* logo */}
        <Linker link="/" child={<Logo />} />

        {/* making link */}
        <button className="linkNav btnHover xl:block hidden">
          Who We Are
          <div className="subLinks">
            <Linker link="/about" child={"About NepaTronix"} />
            <Linker link="/team" child={"Our Expert's Team"} />
          </div>
        </button>

        {/* for services */}
        <button className="linkNav btnHover  xl:block hidden">
          What We DO
          <div className="subLinks">
            <Linker link="/services" child={"Our Services"} />
            <Linker link="/products" child={"Our Products"} />
          </div>
        </button>

        {/* main Linker */}
        <button className="linkNav btnHover xl:block hidden">
          <Linker link="/blogs" child={"Blogs"} />
        </button>
        <button className="linkNav btnHover xl:block hidden">
          <Linker link="/books" child={"Books"} />
        </button>
      </nav>

      {/* second component */}
      <nav className="w-fit h-fit gap-[25px]  xl:flex hidden">
        <button className="linkNav btnHover">
          <Linker link="/shop" child={"Shop"} />
        </button>
        <button className="linkNav btnHover" style={{ height: "50px" }}>
          Activities
          <div className="subLinks leftSub rsponsive">
            <Linker link="/events" child={"Events"} />
            <Linker link="/achievements" child={"Achievements"} />
            <Linker link="/courses" child={"Course Contents"} />
          </div>
        </button>
        <button className="linkNav btnHover">
          <Linker link="/gallery" child={"Gallery"} />
        </button>
        <button className="linkNav btnHover">
          <Linker link="/contact" child={"Contact"} />
        </button>
      </nav>

      {/* responsive */}
      <nav className="w-fit block xl:hidden">
        <button
          className="linkNav btnHover responsiveParent"
          style={{ height: "50px" }}
        >
          <RiMenu3Line style={{ fontSize: "20px", fontWeight: "500" }} />
          <div className="subLinks leftSub responsive text-center shadow-2xl">
            <div className="block " style={{ display: "flex", width: "100%" }}>
              <Linker link="/about" child={"About"} />

              <Linker link="/teams" child={"Teams"} />

              <Linker link="/blogs" child={"Blogs"} />

              <Linker link="/books" child={"Books"} />

              <Linker link="/products" child={"Products"} />

              <Linker link="/shop" child={"Shop"} />

              <Linker link="/events" child={"Events"} />

              <Linker link="/achievements" child={"Achievements"} />

              <Linker link="/courses" child={"Courses"} />
              <Linker link="/gallery" child={"Gallery"} />

              <Linker link="/contact" child={"Contact"} />
            </div>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
