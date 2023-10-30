"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
export default function GridColor() {
  const [order, setOrder] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleDeactivation = () => {
    setIsDeactivating(true);
    const interval = setInterval(function () {
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(interval);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 500);
  };

  const handleGridclick = (id: number) => {
    const newOrder = [...order, id];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length)
      handleDeactivation();
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-4 border-2 border-solid border-black">
        {config.flat(1).map((cell, index) => {
          const isActive = order.includes(index);
          if (cell === 1) {
            return (
              <Button
                className={` m-4 h-40 w-40  border-2 border-solid border-black bg-white hover:bg-slate-100  ${
                  isActive ? "bg-green-600 hover:bg-green-700" : ""
                }`}
                onClick={() => handleGridclick(index)}
                key={index}
                disabled={isActive || isDeactivating}
              ></Button>
            );
          } else return <span key={index}></span>;
        })}
      </div>
    </div>
  );
}
