"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
        setError("");
      } else {
        setMeals([]);
        setError("No Data Found");
      }
    } catch (error) {
      setMeals([]);
      setError("Error fetching data");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <input
        onChange={handleSearch}
        className="p-4 rounded-lg outline-none border-transparent text-slate-900 bg-slate-300"
        type="text"
      />
      <button onClick={loadData} className="btn btn-error">
        Search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.length > 0 &&
          !error &&
          meals.map((meal) => (
            <div key={meal.idMeal} className="boder-2 p-4">
              <Image
                src={meal.strMealThumb}
                width={500}
                height={400}
                alt={meal.strMeal}
              />
              <h2 className="text-lg">{meal.strMeal}</h2>
              <h6>{meal.strInstructions}</h6>
            </div>
          ))}
        {error && <h6>{error}</h6>}
      </div>
    </div>
  );
};

export default Meals;
