import React from "react";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import Ingredients from "./Ingredients/page";
import Uses from "./Uses/page";
import Button from "./Components/Button";

const Home = () => {
  return (
    <main className="">
      <div className="sticky top-0  ">
      {/* <div> */}
        <Navbar />
      </div>
      <div className="text-green-100 w-100%   h-calc[100vh-48px] items-center p-6  ">
        <h1 className=" text-8xl font-semibold  ">
          <span>22</span> Chilli Flakes
        </h1>
        <h1 className="text-2xl">Spice Life Naturally</h1>
        <h2 className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi
          ullam <br />
          sed, mollitia id commodi pariatur cumque eos a repudiandae tempora{" "}
          <br />
          impedit expedita quis illum dolorum ipsa perferendis nostrum natus.
        </h2>
      </div>
      <div>
        <Link href="/">
          <Button variant="Primary"> Shop in Kenya</Button>
          </Link>
        <Link href="/">
          <Button variant="Primary">Shop in Rwanda</Button>
        </Link>
      </div>
      <div className="h-100vh bg-black-100 w-full h-screen text-green-100">
        {/* //Ingredients */}
        <Ingredients />
      </div>
      {/* Uses/Ingredients */}
      <div className=" h-screen style={{ backgroundImage: url('https://pin.it/22z3y5OoS')}}">
        <Uses />
      </div>
    </main>
  );
};

export default Home;
