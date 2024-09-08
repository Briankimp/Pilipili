import React from "react";
import Carousel from "../../components/Carousel";
import Link from "next/link";
import Button from "../../components/Button";

const Uses = () => {
  return (
    <div className="text-black-100">
      <h1>Flavours that Bring you together</h1>
      <div>
        <Carousel />
      </div>
      <div className=" w-full flex justify-items-center  ">
        <Link href="/">
          <Button variant="Primary">Show Us Your Recipe</Button>
        </Link>
      </div>
    </div>
  );
};

export default Uses;
