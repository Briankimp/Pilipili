"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Uses from "./Uses/page";
import Button from "../components/Button";
import Shop from "./Shop/page";
import Contact from "./contact/page";
import Ingredients from "./Ingredients/page";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <main>
      <div className="sticky top-0">
        <Navbar />
      </div>

      {/* Parallax Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          className="" // Change to desired background color
          initial={{ y: 0 }}
          whileInView={{ y: -100 }} // Adjust for effect
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex flex-col gap-9 h-full p-6 text-green-100">
          <h1 className="pt-9 text-6xl md:text-8xl font-semibold items-center">
            <span>22</span> Chilli Flakes
          </h1>
          <h1 className="text-2xl italic font-light">Spice Life Naturally</h1>
          <h2 className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            nisi ullam <br />
            sed, mollitia id commodi pariatur cumque eos a repudiandae tempora{" "}
            <br />
            impedit expedita quis illum dolorum ipsa perferendis nostrum natus.
          </h2>
          <div className="flex w-full text-lg items-start">
            <Link href="/">
              <Button variant="Primary" className="items-center flex">
                <span>Shop in Kenya</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="Primary" className="items-center flex">
                <span>Shop in Rwanda</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="h-screen w-full text-green-100">
        <Ingredients />
      </div>
      <div className="h-screen">
        <Uses />
      </div>
      <div className="h-screen bg-white-200">
        <Shop />
      </div>
      <div className="px-4">
        <Contact />
      </div>
    </main>
  );
};

export default Home;
