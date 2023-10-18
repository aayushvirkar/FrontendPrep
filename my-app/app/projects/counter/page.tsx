"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countState, setCountState] = useState("Stop");

  function incrementCount() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countState === "Start") {
      timer = setInterval(() => {
        incrementCount();
      }, 500);
    }
    return () => clearInterval(timer);
  }, [countState]);

  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex justify-center items-center flex-col bg-slate-300 h-48 w-96">
        <span>{count}</span>
        <div className="my-4">
          <Button
            className="mx-2"
            variant={"secondary"}
            onClick={() => setCountState("Start")}
          >
            Start
          </Button>
          <Button
            className="mx-2"
            variant={"destructive"}
            onClick={() => setCountState("Pause")}
          >
            Stop
          </Button>
          <Button
            className="mx-2"
            onClick={() => {
              setCountState("Reset"), setCount(0);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
