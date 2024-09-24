import React from "react";
import { details } from "framer-motion/client";
import Button from "@/components/Button";
import Link from "next/link";
import path from "path";
import Sustainabilty from "../sustainability/page";
const Pricing = [
  {
    Contry: "Kenya",
    Price: "Ksh 500",
    Steps: [
      {
        StepNumber: 1,
        description: "Select your package",
      },
      {
        StepNumber: 1,
        description: "Select your package",
      },
      {
        StepNumber: 1,
        description: "Select your package",
      },
      {
        StepNumber: 1,
        description: "Select your package",
      },
    ],
        shopnow: "Get Your Spice",
    path:"/yes"
  },
  {
    Contry: "Rwanda",
    Price: "RWF 1500",
    Steps: [
      {
        StepNumber: 1,
        description: "Select your package",
      },
      {
        StepNumber: 2,
        description: "Select your package",
      },
      {
        StepNumber: 3,
        description: "Select your package",
      },
      {
        StepNumber: 1,
        description: "Select your package",
      },
    ],
      shopnow: "Get Your Spice",
    path:"/yes"
  },
];
const Shop = () => {
  return (
    <div className="text-black-100 w-full  ">
      <div>
        <h1 className="text-4xl font-semibold text-center py-3  ">
          Get Your Spice Fix
        </h1>
      </div>
      <div className=" grid grid-cols-2 px-4 gap-2 w-full justify-center  items-center ">
        {Pricing.map((Pricing, index) => (
          <div
            key={index}
            className="bg-btn-orange mx-auto gap-3 shadow-lg p-3 m-2 rounded-xl  text-center flex flex-col w-2/5 py-3"
          >
            <h1 className="font-semibold text-3xl ">{Pricing.Contry}</h1>
            <h1 className="font-semibold text-md ">{Pricing.Price}</h1>
            {Pricing.Steps && (
              <ol className="  ">
                {Pricing.Steps.map((Step, StepIndex) => (
                  <li key={StepIndex}>
                    <h3>
                      Step{Step.StepNumber} - {Step.description}
                    </h3>
                  </li>
                ))}
              </ol>
            )}
            <Link href={Pricing.path}>
              <Button variant="secondary">{Pricing.shopnow}</Button>
            </Link>
          </div>
        ))}
      </div>
      <div className=" w-full bg-white-200 mt-2 ">
        <Sustainabilty />
      </div>
    </div>
  );
};

export default Shop;
