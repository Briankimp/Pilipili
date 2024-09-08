import React from "react";
import { CardSpotlightDemo } from "@/components/Card";
import { details } from "framer-motion/client";
import Button from "@/components/Button";
import Link from "next/link";
import path from "path";
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
];
const Shop = () => {
  return (
    <div className="text-black-100 w-full  ">
      <div>
        <h1 className="text-4xl font-semibold text-center  ">Get Your Spice Fix</h1>
      </div>
      <div className=" flex p-4 gap-2  w-full justify-center items-center ">
        {Pricing.map((Pricing, index) => (
          <div
            key={index}
            className="bg-btn-orange gap-3 shadow-lg p-5 m-2 rounded-xl w-auto text-center flex flex-col  "
          >
            <h1 className="font-semibold text-3xl ">{Pricing.Contry}</h1>
            <h1 className="font-semibold text-md ">{Pricing.Price}</h1>
            {Pricing.Steps && (
              <ol className="  ">
                {Pricing.Steps.map((Step, StepIndex) => (
                  <li key={StepIndex}>
                    <h3>
                      Step{Step.StepNumber} : {Step.description}
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
    </div>
  );
};

export default Shop;
