import { Carousel } from "antd";
import React from "react";
import Image from "next/image";
import { Card } from "antd";

interface Recipe {
  ingredients: string;
  instructions: Array<string>; // Change this to Array<string> | string
  name: string;
}
const recipes: Recipe[] = [
  {
    name: "Hot Pizza",
    ingredients: "22 Chilli, ginger",
    instructions: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Laborum nisi ullam sed, mollitia id commodi pariatur",
      "cumque eos a repudiandae tempora<br /> impedit",
      "expedita quis illum dolorum ipsa perferendis nostrum natus.",
    ],
  },
  {
    name: "Hote Pizza",
    ingredients: "22 Chilli, ginger",
    instructions: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Laborum nisi ullam sed, mollitia id commodi pariatur",
      "cumque eos a repudiandae tempora<br /> impedit",
      "expedita quis illum dolorum ipsa perferendis nostrum natus.",
    ],
  },
  {
    name: "Hoto Pizza",
    ingredients: "22 Chilli, ginger",
    instructions: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Laborum nisi ullam sed, mollitia id commodi pariatur",
      "cumque eos a repudiandae tempora<br /> impedit",
      "expedita quis illum dolorum ipsa perferendis nostrum natus.",
    ],
  },
  {
    name: "Hot Pizzwa",
    ingredients: "22 Chilli, ginger",
    instructions: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Laborum nisi ullam sed, mollitia id commodi pariatur",
      "cumque eos a repudiandae tempora<br /> impedit",
      "expedita quis illum dolorum ipsa perferendis nostrum natus.",
    ],
  },
];

const CarouselComponent = () => {
  return (
    <div className=" w-full bg-white-100 z-10 ">
      <Carousel
        autoplay
        className=" w-full h-full bg-white-100 "
        dots={false}
        arrows={true}
      >
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="w-full border shadow-sm flex-col-1 text-center bg-white-100"
          >
            {/* <Card title="Born"> */}
            {/* <Card title={recipe.name}> */}
            <h1 className="text-2xl font-bold">{recipe.name}</h1>
            <h2 className="text-xl text-wrap">{recipe.ingredients}</h2>
            <ol>
              {recipe.instructions.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            {/* </Card> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
