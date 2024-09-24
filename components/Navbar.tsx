"use client";
import path from "path";
import Link from "next/link";
import React, { useState } from "react";
import Mobilenav from "./Mobilenav";

const Navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Ingredients",
    path: "#Ingredients",
  },
  {
    name: "Uses",
    path: "#Uses",
  },
  {
    name: "Shop",
    path: "#Shop",
  },
  {
    name: "Contact",
    path: "#Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky  ">
      <div className=" hidden md:flex justify-between mx-1 text-lg rounded-full mt-3 bg-white-200 shadow-sm text-text-black font-semibold p-3 align-middle">
        <div>
          <h1 className="text-5xl font-bold text-black-100">22</h1>
        </div>
        <div className="text-lg gap-3 p-3  ">
          {Navlinks.map((Navlink, index) => (
            <Link
              key={index}
              href={Navlink.path}
              className="  text-green-100 hover:text-btn-yellow p-3"
              
            >
              {Navlink.name}
            </Link>
          ))}
        </div>
      </div>

      {/* // Mobile Nav */}

      <Mobilenav />
    </div>
  );
};

export default Navbar;
