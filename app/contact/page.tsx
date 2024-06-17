"use client";
import { postData } from "@/ApiRequest/PostReqs";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// #bb6ce6

const page = () => {
  const submitContact = async (e: any) => {
    const target = e?.target;
    const contactData = {
      fName: target?.fName?.value,
      lName: target?.lName?.value,
      email: target?.email?.value,
      found: target?.found?.value,
      message: target?.message?.value,
    };
    const returns: boolean = await postData(contactData, "contact");
    if(returns) return alert("Message Sent Successfully!")
  };

  return (
    <main className="min-h-screen bg-gradient-to-t pt-[220px] pb-[140px] from-[#bb6ce6] to-[#0d0628] flex flex-wrap justify-around bg-fixed">
      {/* make contact */}
      <div
        className="w-full h-fit p-[4rem] py-32 bg-[#000024] bg-opacity-40 "
        style={{
          maxWidth: "60rem",
          boxShadow: "0 0 0.25rem white",
          borderRadius: "30px",
        }}
      >
        <h1 className=" text-8xl font-extrabold" style={{ color: "#ef43cf" }}>
          Get in touch.
        </h1>
        <br />
        <p className="text-[16px] text-white" style={{ width: "90%" }}>
          We&apos;re here to help and answer any questions you might have. We
          will answer your inquries in a maximum of 48 hours.
        </p>
        <br />
        <ul className="text-[16px] text-white" style={{ listStyle: "none" }}>
          <li style={{ display: "flex", margin: "20px 0" }}>
            <MdEmail className="text-[22px]" style={{ color: "#b377e3" }} />
            &nbsp;&nbsp;
            <span className="mt-[-4px]">contact@nepatronix.org</span>
          </li>
          <li style={{ display: "flex", margin: "20px 0" }}>
            <FaPhoneAlt className="text-[22px]" style={{ color: "#b377e3" }} />
            &nbsp;&nbsp;<span className="mt-[-4px]">+977 9803661701</span>
          </li>
          <li style={{ display: "flex", margin: "20px 0" }}>
            <FaLocationDot
              className="text-[22px]"
              style={{ color: "#b377e3" }}
            />
            &nbsp;&nbsp;
            <span className="mt-[-4px]">Nepal, Bhaktapur, Lokanthali</span>
          </li>
          <br />
          <br />
        </ul>
      </div>
      {/* input */}
      <form onSubmit={submitContact}
        className="w-full h-fit p-[4rem] flex  flex-wrap rounded-2xl"
        style={{ maxWidth: "80rem", gap: "4rem" }}
      >
        <input
          type="text"
          placeholder="First Name *"
          required
          style={{
            width: "calc(50% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="fName"
        />
        <input
          type="text"
          placeholder="Last Name *"
          required
          style={{
            width: "calc(50% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="lName"
        />
        <input
          type="email"
          placeholder="Email *"
          required
          style={{
            width: "calc(50% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="email"
        />
        <input
          type="text"
          placeholder="Phone Number *"
          required
          style={{
            width: "calc(50% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="phone"
        />
        <input
          type="text"
          placeholder="How did you find us? *"
          required
          style={{
            width: "calc(100% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="found"
        />
        <input
          type="text"
          placeholder="Message *"
          required
          style={{
            width: "calc(100% - 20px)",
            color: "white",
            fontSize: "18px",
            background: "transparent",
            borderBottom: "2px solid",
            padding: "20px 0",
          }}
          aria-required="true"
          id="message"
        />
        <button
          type="submit"
          className="text-[16px] text-white mt-[20px] bg-[#0059ff] px-[40px] py-[5px] rounded-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
