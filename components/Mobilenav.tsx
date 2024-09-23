import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";
import Button from "./Button";

const Navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Ingredients",
    path: "/Ingredients",
  },
  {
    name: "Uses",
    path: "/Uses",
  },
  {
    name: "Shop",
    path: "/Shop",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Mobilenav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden text-text-black font-semibold p-2 mt-1 shadow-md bg-white-200 rounded-full mx-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold px-2 text-black-100">22</h1>
        </div>
        <div>
          <Button
            onClick={toggleMenu}
            className=" text-btn-orange hover:text-btn-red  bg-btn-yellow top-4 right-4 z-50 p-2 text-white bg-red rounded-full focus:outline-none"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </Button>

          <div
            className={`fixed top-0 h-screen right-0 w-full items-center transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } items-center gap-6 z-40 p-4 flex  flex-col bg-white-200 text-center justify-center h-screen text-4xl  `}
          >
            <Button
              onClick={toggleMenu}
              className=" text-btn-orange hover:text-btn-red  bg-btn-yellow !top-4 !right-4 z-50 p-2 text-white bg-red rounded-full focus:outline-none"
            >
              {isOpen ? <X size={34} /> : <Menu size={34} />}
            </Button>
            {...Navlinks.map((Navlink, index) => (
              <Link
                key={index}
                className=" text-green-100 hover:text-btn-yellow "
                href={Navlink.path}
                onClick={() => setIsOpen(false)}
              >
                {Navlink.name}
              </Link>
            ))}
            <Button className="px-3">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
