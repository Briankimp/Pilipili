"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
// import Ingredients from "./ingredients/page";
import Ingredients from "./Ingredients/page";
import Uses from "./Uses/page";
import Button from "../components/Button";
import { useState } from "react";
import Shop from "./Shop/page";
import { ShoppingCart } from "lucide-react";
import Sustainability from "./sustainability/page";
import Contact from "./contact/page";
interface HoverButtonProps {
  initialText: string;
  hoverText: string;
}

const Home: React.FC<HoverButtonProps> = ({ initialText, hoverText }) => {
  const [text, setText] = useState(initialText);
  const [hovered, setHovered] = useState(false);
  return (
    // <main className="md:px-16">
    <main className="">
      <div className="sticky top-0">
        {/* <div> */}
        <Navbar />
      </div>
      <div className="text-green-100 w-full flex flex-col  gap-9 h-screen p-6">
        <h1 className="pt-9 text-6xl md:text-8xl font-semibold items-center  ">
          <span>22</span> Chilli Flakes
        </h1>
        <h1 className="text-2xl  italic font-light">Spice Life Naturally </h1>
        <h2 className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi
          ullam <br />
          sed, mollitia id commodi pariatur cumque eos a repudiandae tempora{" "}
          <br />
          impedit expedita quis illum dolorum ipsa perferendis nostrum natus.
        </h2>
        <div className=" flex w-full text-lg items-start">
          <Link href="/">
            <Button variant="Primary" className="  items-center flex">
              <span>Shop in Kenya</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="Primary" className=" items-center flex">
              <span>Shop in Rwanda</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-screen w-full text-green-100">
        <Ingredients />
      </div>
      <div className=" h-screen">
        <Uses />
      </div>
      <div className="h-screen bg-cover bg-center bg-white-200">
        <Shop />
      </div>
      <div className="px-4 ">
        <Contact />
      </div>
    </main>
  );
};

export default Home;
