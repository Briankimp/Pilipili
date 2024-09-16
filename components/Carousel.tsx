import { Carousel } from "antd";
import React from "react";
import Image from "next/image";
import { Card } from "antd";

interface Recipe {
  ingredients: string;
  instructions: string;
  name: string;
}
const Recipe: Recipe[] = [{
  name: "Hot Pizza",
  ingredients: "22 Chilli, ginger",
  instructions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi ullam <br/> sed, mollitia id commodi pariatur cumque eos a repudiandae tempora <br/> impedit expedita quis illum dolorum ipsa perferendis nostrum natus."
},
{
  name: "Hote Pizza",
  ingredients: "22 Chilli, ginger",
  instructions: Steps = [
    Step 1:"Lorem ipsum dolor sit,"
    Step 2: "amet consectetur adipisicing elit",
    Step 3:"Laborum nisi ullam brsed",
    Step 4:"Stepmollitia id commodi pariatur cumque eos",
    Step 5: "a repudiandae tempora impedit expedita quis ",
    Step 6:"illum dolorum ipsa perferendis nostrum natus."],
],
  {
  name: "Hoto Pizza",
  ingredients: "22 Chilli, ginger",
  instructions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi ullam <br/> sed, mollitia id commodi pariatur cumque eos a repudiandae tempora <br/> impedit expedita quis illum dolorum ipsa perferendis nostrum natus."
},
  {
  name: "Hot Pizzwa",
  ingredients: "22 Chilli, ginger",
  instructions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nisi ullam <br/> sed, mollitia id commodi pariatur cumque eos a repudiandae tempora <br/> impedit expedita quis illum dolorum ipsa perferendis nostrum natus."
}
]

const CarouselComponent = () => {
  return (
    <div className=" w-full bg-white-100 ">
      <Carousel autoplay className=" w-full bg-white-100 ">          
              {Recipe.map((recipe, index) => (
                <div
                  key={index}
                  className="w-full border shadow-sm flex-col-1 text-center bg-white-100"
                >
                 {/* <Card title="Born"> */}
                 <Card title={recipe.name} >
                  {/* <h1 className="text-2xl font-bold">{recipe.name}</h1> */}
                  <h2 className="text-xl text-wrap">{recipe.ingredients}</h2>
                  <h2 className="text-xl text-wrap">{recipe.instructions}</h2>               
                  </Card>
                </div>           
              ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent

