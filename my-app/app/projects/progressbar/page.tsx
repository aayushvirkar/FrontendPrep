"use client";
import { useState } from "react";
import ProgressBar from "@/components/progressbar";

export default function ProgressBarWrapper() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex h-[800px] w-[800px] flex-col items-center justify-center bg-slate-500">
        <ProgressBar value={80} onComplete={() => setIsComplete(true)} />
        <div className="my-2">{isComplete ? "Done!" : "Loading.."}</div>
      </div>
    </div>
  );
}
