import Meals from "@/components/Meals/Meals";
import React from "react";


export const metadata = {
  title :{
    absolute : "Meals"
  },
  description: "Meals page",
  keywords: ["meals" , "meals page"]
};

const MealsPage = () => {
  return (
    <>
      <div className="p-12">
        <h1 className="text-3xl font-semibold text-red-400">
          Choise your meals
        </h1>
        <p className="">Choise your meals by Searching..........</p>
        <Meals />
      </div>
    </>
  );
};

export default MealsPage;
