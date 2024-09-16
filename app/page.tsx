"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Ingredients from "./ingredients/page";
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
      {/* <div className="flex-grow "> */}
      <div
        className="text-green-100 w-full flex flex-col  gap-7 h-screen p-6"
        // style={{
        //   backgroundImage: "url('/uses/Chilli.jpeg')",
        //   backgroundSize: "100% 100%", // Adjust the width and height as needed
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h1 className=" text-6xl md:text-8xl font-semibold  ">
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
        <div className=" flex w-full  ">
          <Link href="/">
            <Button variant="Primary" className=" items-center flex">
              {/* This will display only one text at a time based on hover state */}
              <span>Shop in Kenya</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="Primary" className=" items-center flex">
              {/* This will display only one text at a time based on hover state */}
              <span>Shop in Rwanda</span>
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="h-screen w-full text-green-100"
        // style={{
        //   backgroundImage: "url('/uses/PlayfulCook.jpeg')",
        //   backgroundSize: "100% 100%", // Adjust the width and height as needed
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   opacity: 0.6,
        // }}
      >
        {/* //Ingredients */}
        <Ingredients />
      </div>

      <div
        className=" h-screen"
        // style={{
        //   backgroundImage: "url('/uses/Another.jpeg')",
        //   backgroundSize: "100% 100%", // Adjust the width and height as needed

        //  }}
      >
        <Uses />
      </div>
      <div
        className="h-screen bg-cover bg-center bg-white-200"
        // style={{ backgroundImage: "url('/uses/PlayfulCook.jpeg')" }}
      >
        <Shop />
      </div>
      <div className="px-4 ">
        <Contact/>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Home;
