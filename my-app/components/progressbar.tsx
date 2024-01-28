import { useEffect, useState, useRef } from "react";

export default function ProgressBar({
  value,
  onComplete,
}: {
  value: number;
  onComplete: () => void;
}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (percentage < value && percentage < 100) {
        setPercentage((val) => val + 1);
      } else {
        clearInterval(id);
      }
    }, 100);

    return () => clearInterval(id);
  }, [percentage, value]);

  if (percentage === value || percentage === 100) {
    onComplete();
  }
  const textColor = percentage <= 50 ? "black" : "white";

  return (
    <div
      className={`relative h-[30px] w-[600px] overflow-hidden  rounded-full bg-gray-300 text-center`}
    >
      <div
        style={{
          transform: `scaleX(${percentage / 100})`,
          transformOrigin: "left",
        }}
        className={`h-full  bg-green-600 `}
      ></div>
      <span style={{ color: textColor }} className="absolute top-0">
        {percentage.toFixed()} %
      </span>
    </div>
  );
}
