// import path from 'path';
import Link from 'next/link';
import React from 'react'


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
    name: "Shop",
    path: "/Shop",
  },
  {
    name: "Contact",
    path: "/contacts",
  },
];

const Navbar = () => {
  return (
    <div className="text-lg text-text-black font-semibold  p-3 pt-3 align-middle">
      <div className="flex justify-between ">
        <div>
          <h1 className='text-4xl text-black-100' >22</h1>
        </div>
        <div className='text-lg text-green-100 gap-3 p-3  '>
          {Navlinks.map((Navlink, index) => (
            <Link
              key={index}
              href={Navlink.path}
              className='p-3'>{Navlink.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar
