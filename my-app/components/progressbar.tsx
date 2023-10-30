import { useEffect, useState } from "react";

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
      className={`relative text-center w-[600px] h-[30px]  bg-gray-300 rounded-full overflow-hidden`}
    >
      <div
        style={{
          transform: `scaleX(${percentage / 100})`,
          transformOrigin: "left",
        }}
        className={`bg-green-600  h-full `}
      ></div>
      <span style={{ color: textColor }} className="absolute top-0">
        {percentage.toFixed()} %
      </span>
    </div>
  );
}
