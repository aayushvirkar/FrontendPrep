"use client";

import { useState } from "react";

export default function StarRating() {
  const [starValue, setStarValue] = useState(0);
  const [stableStarValue, setStableStarValue] = useState(0);

  const handleStarHover = (id: number) => {
    setStarValue(id);
  };

  console.log(starValue);
  return (
    <div className="flex items-center justify-center bg-slate-400">
      <div className="p-4">
        <div
          className={`h-4 w-4 cursor-pointer border-2 border-red-500 ${
            starValue >= 1 ? "bg-red-500" : ""
          }`}
          onMouseOver={() => handleStarHover(1)}
          onMouseLeave={() => setStarValue(stableStarValue)}
          onClick={() => setStableStarValue(1)}
        ></div>
      </div>
      <div className="p-4">
        <div
          className={`h-4 w-4 cursor-pointer border-2 border-red-500 ${
            starValue >= 2 ? "bg-red-500" : ""
          }`}
          onMouseOver={() => handleStarHover(2)}
          onMouseLeave={() => setStarValue(stableStarValue)}
          onClick={() => setStableStarValue(2)}
        ></div>
      </div>
      <div className="p-4">
        <div
          className={`h-4 w-4 cursor-pointer border-2 border-red-500 ${
            starValue >= 3 ? "bg-red-500" : ""
          }`}
          onMouseOver={() => handleStarHover(3)}
          onMouseLeave={() => setStarValue(stableStarValue)}
          onClick={() => setStableStarValue(3)}
        ></div>
      </div>
      <div className="p-4">
        <div
          className={`h-4 w-4 cursor-pointer border-2 border-red-500 ${
            starValue >= 4 ? "bg-red-500" : ""
          }`}
          onMouseOver={() => handleStarHover(4)}
          onMouseLeave={() => setStarValue(stableStarValue)}
          onClick={() => setStableStarValue(4)}
        ></div>
      </div>
      <div className="p-4">
        <div
          className={`h-4 w-4 cursor-pointer border-2 border-red-500 ${
            starValue >= 5 ? "bg-red-500" : ""
          }`}
          onMouseOver={() => handleStarHover(5)}
          onMouseLeave={() => setStarValue(stableStarValue)}
          onClick={() => setStableStarValue(5)}
        ></div>
      </div>
    </div>
  );
}
