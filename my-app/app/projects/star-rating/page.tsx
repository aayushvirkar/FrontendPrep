"use client";

import { useState, useMemo } from "react";
import StarSymbol from "@/components/star";

const NUMBER_OF_STARS = 5;
export default function StarRating() {
  const [starValue, setStarValue] = useState(0);
  const [selection, setSelection] = useState(0);

  const starArray = useMemo(() => Array.from({ length: NUMBER_OF_STARS }), []);
  return (
    <div className="flex items-center justify-center bg-slate-400">
      {starArray.map((_, index) => {
        return (
          <StarSymbol
            isSelected={(starValue || selection) > index}
            handleStarHover={setStarValue}
            handleSelection={setSelection}
            starId={index + 1}
            key={index}
          />
        );
      })}
    </div>
  );
}
