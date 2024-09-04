import { Span } from "next/dist/trace";
import React from "react";

const Testonials = [
  {
    Testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt, quisquam  adipisci accusamus ipsam mollitia atque ut molesllat corporis",
    name: "Brian",
    Country: "Kenya",
  },
  {
    Testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt, quisquam  adipisci accusamus ipsam mollitia atque ut molesllat corporis",
    name: "Kimathi",
    Country: "Rwanda",
  },
];
function TestimonialCard() {
  return (
    <div className="h-9 overflow- w-7 flex gap-3 ">
      {...Testonials.map((Testimony, index) => (
        <div
          key={index}
          className="border outline-none  bg-btn-yellow shadow-sm rounded  "
        >
          <h1 className="text-black-100 text-xs">{Testimony.Testimony}</h1>
          <h1 className=" text-xs">
            {Testimony.name},<span>{Testimony.Country}</span>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;
