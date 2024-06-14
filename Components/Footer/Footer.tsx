"use client";

import React from "react";
import "./foot.css";
import FOOTER from "./FOOTER.json";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      {/* logo */}
      <div className="footing">
        <img src="/mainImages/logo.png" className="logo" alt="NepaTronix Logo" />
        <br />
        <br />
        © 2024 NepaTronix.
        <br />
        All rights reserved
      </div>
      {/* quickies */}
      <div className="footing">
        <h3>Quick Links</h3>
        <br />
        <Link href="/">Home</Link>
        <br />
        <br />
        <Link href="/our_services">Services</Link>
        <br />
        <br />
        <Link href="/about_nepatronix">About</Link>
        <br />
        <br />
        <Link href="/contact">Contact</Link>
      </div>
      {/* contacts */}
      <div className="footing">
        <h3>Contact</h3>
        <br />
        {FOOTER?.phone}
        <br />
        <br />
        {FOOTER?.mail}
      </div>
      {/* location */}
      <div className="footing">
        <h3>Location</h3>
        <br />
        {FOOTER?.location}
      </div>
      {/* social links */}
      <div className="footing footLinks">
        <Link href={FOOTER?.facebook || "#"} className="socialLink">
          <FaFacebook className="socialIcon" />
        </Link>
        <Link href={FOOTER?.linkedin || "#"} className="socialLink">
          <FaLinkedin className="socialIcon" />
        </Link>
        <Link href={FOOTER?.youtube || "#"} className="socialLink">
          <FaYoutube className="socialIcon" />
        </Link>
        <Link href={FOOTER?.twitter || "#"} className="socialLink">
          <FaXTwitter className="socialIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
