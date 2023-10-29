"use client";
import { useState } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
export default function GridColor() {
  const [gridState, setGridState] = useState(config);

  const onGridClickHandler = (id: number) => {};
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-solid border-2 border-black">
        {gridState.map((row) => {
          return (
            <div className="flex justify-between">
              {row.map((cell) => {
                if (cell !== 0) {
                  return (
                    <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between">
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
          <div className="w-40 h-40 border-solid border-2 border-black m-2"></div>
        </div> */
}
