import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white px-8 py-10">
      <div className="w-full text-center my-10">
        <div>
          <img
            src="assets/logopng2.png"
            alt="woawafrica logo"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="inline-block space-x-4 mt-3 mb-5">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About Us</span>
          </Link>
          <Link to="/destinations">
            <span>Destinations</span>
          </Link>
          <Link to="/experience">
            <span>Experience</span>
          </Link>
          <Link to="/contact">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center mt-4 mb-9">
        <p>&copy; 2024 WoawAfrica. All rights reserved.</p>
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
