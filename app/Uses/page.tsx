import React from "react";
import Carousel from "../../components/Carousel";
import Link from "next/link";
import Button from "../../components/Button";

const Uses = () => {
  return (
    <div className="text-black-100 flex items-center h-screen gap-5 flex-col ">
      <h1 className="text-black-100 text-center font-bold  text-2x md:text-4xl ">Flavours that Bring you together</h1>
      <div>
        <Carousel />
      </div>
      <div className=" w-full flex justify-items-center  ">
        <Link href="/">
          <Button variant="Primary" className=" items-center text-center" >Show Us Your Recipe</Button>
        </Link>
      </div>
    </div>
  );
};

export default Uses;
