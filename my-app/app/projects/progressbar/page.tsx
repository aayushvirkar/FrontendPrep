"use client";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/progressbar";

export default function ProgressBarWrapper() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" flex flex-col justify-center items-center w-[800px] h-[800px] bg-slate-500">
        <ProgressBar value={80} onComplete={() => setIsComplete(true)} />
        <div className="my-2">{isComplete ? "Done!" : "Loading.."}</div>
      </div>
    </div>
  );
}
