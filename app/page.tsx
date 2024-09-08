"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Ingredients from "./Ingredients/page";
import Uses from "./Uses/page";
import Button from "../components/Button";
import { useState } from "react";
import Shop from "./Shop/page";
import { ShoppingCart } from "lucide-react";

interface HoverButtonProps {
  initialText: string;
  hoverText: string;
}

const Home: React.FC<HoverButtonProps> = ({ initialText, hoverText }) => {
  const [text, setText] = useState(initialText);
  const [hovered, setHovered] = useState(false);
  return (
    <main className="md:px-16">
      <div className="sticky top-0">
        {/* <div> */}
        <Navbar />
      </div>
      {/* <div className="flex-grow "> */}
      <div className="text-green-100 w-full flex flex-col  gap-7 h-screen p-6  ">
        <h1 className=" text-6xl md:text-8xl font-semibold  ">
          <span>22</span> Chilli Flakes
        </h1>
        <h1 className="text-2xl  italic font-light">Spice Life Naturally</h1>
        <h2 className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi
          ullam <br />
          sed, mollitia id commodi pariatur cumque eos a repudiandae tempora{" "}
          <br />
          impedit expedita quis illum dolorum ipsa perferendis nostrum natus.
        </h2>
        <div className=" flex w-full  ">
          <Link href="/">
            <Button
              variant="Primary"
              className="button-hover-effect items-center flex"
              onMouseEnter={() => {
                setText(hoverText);
                setHovered(true)
               }}
              onMouseLeave={() => {
                setText(initialText); 
                setHovered(false)
              }}
            >
              <ShoppingCart size={15} className="mr-1" />
              {text}
            </Button>
          </Link>
          <Button
            variant="Primary"
            className="button-hover-effect items-center flex"
          >
            <ShoppingCart size={15} className="mr-1" />
            {text}
          </Button>
        </div>
      </div>
      <div className="h-100vh bg-black-100 w-full h-screen text-green-100">
        {/* //Ingredients */}
        <Ingredients />
      </div>
      {/* Uses/Ingredients */}
      <div className=" h-screen style={{ backgroundImage: url('https://pin.it/22z3y5OoS')}}">
        <Uses />
      </div>
      <div>
        <Shop />
      </div>
      {/* </div> */}
    </main>
  );
};


export default Home;
