"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const timerId = useRef<NodeJS.Timeout>();

  function handleStartButton() {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);
  }
  function handleStopButton() {
    clearInterval(timerId.current);
  }
  function handleResetButton() {
    clearInterval(timerId.current);
    setCount(0);
  }

  return (
    <div className="flex h-96 items-center justify-center">
      <div className="flex h-48 w-96 flex-col items-center justify-center bg-slate-300">
        <span>{count}</span>
        <div className="my-4">
          <Button
            className="mx-2"
            variant={"secondary"}
            onClick={handleStartButton}
          >
            Start
          </Button>
          <Button
            className="mx-2"
            variant={"destructive"}
            onClick={handleStopButton}
          >
            Stop
          </Button>
          <Button className="mx-2" onClick={handleResetButton}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
