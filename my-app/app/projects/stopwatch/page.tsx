"use client";
import { useEffect, useState } from "react";

function formatTime(time: number): string {
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const hrs = hours < 10 ? `0${hours}` : hours;
  const m = mins < 10 ? `0${mins}` : mins;
  const s = seconds < 10 ? `0${seconds}` : seconds;

  return `${hrs}:${m}:${s}`;
}

export default function StopWatch() {
  const [count, setCount] = useState(7200);

  const formattedTime = formatTime(count);
  useEffect(() => {
    if (count === 0) return;
    const timer = setTimeout(() => setCount(count - 1), 100);

    return () => clearTimeout(timer);
  }, [count]);

  return <div>{formattedTime}</div>;
}
