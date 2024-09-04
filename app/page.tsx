import React from "react";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import Ingredients from "./Ingredients/page";

const Home = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="text-green-100 w-100% h-100vh items-center p-6 gap-8  ">
        <h1 className=" text-4xl">
          <span>22</span> Chilli Flakes
        </h1>
        <h1>Spice Life Naturally</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi
          ullam <br />
          sed, mollitia id commodi pariatur cumque eos a repudiandae tempora{" "}
          <br />
          impedit expedita quis illum dolorum ipsa perferendis nostrum natus.
        </h2>
      </div>
      <div>
        <Link href="/">
          <button className="text-black-100 bg-btn-orange p-3 rounded-full m-3 ">
            Shop in Kenya
          </button>
        </Link>
        <Link href="/">
          <button className="text-black-100 bg-btn-orange p-3 rounded-full m-3">
            Shop in Uganda
          </button>
              </Link>
        </div>
        <div className="h-100vh bg-black-100 w-full text-green-100">
              Ingrediends
              <Ingredients/>
        </div>
    </main>
  );
};

export default Home;
