import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navlinks = [
  {
    name: "Home",
    path: "/home",
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
    name: "Contact",
    path: "/contacts",
  },
  {
    name: "Shop Now",
    path: "/Shop"
    // className=
  }
];
const Mobilenav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden block bg-white-100 text-text-black font-semibold p-3 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-black-100">22</h1>
        </div>

        <div>
          <button
            onClick={toggleMenu}
            className=" text-btn-orange hover:text-btn-red  bg-btn-yellow top-4 right-4 z-50 p-2 text-white bg-red rounded-full focus:outline-none"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
          <div
            className={`fixed top-0 right-0 w-full h-full items-center bg-white-200 transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } items-center gap-6 p-4 z-100`}
          >
            <div className="flex gap-5 p-5 flex-col items-center h-full text-4xl ">
              {...Navlinks.map((Navlink, index) => (
                <Link
                  key={index}
                  className="text-black-100 hover:text-green-100 "
                  href={Navlink.path}
                  onClick={() => setIsOpen(false)}
                >
                  {Navlink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
