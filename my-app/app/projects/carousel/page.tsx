"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const images = [
  "arsenal_logo.png",
  "aston_villa_logo.png",
  "brighton_logo.png",
];
export default function Carousel() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="flex">
        <Button
          disabled={selectedImage === 0}
          onClick={() => setSelectedImage(selectedImage - 1)}
        >
          Left
        </Button>
        <div className="mx-5 flex">
          {images.map((record, index) => {
            if (selectedImage === index)
              return (
                <div className="mx-2 border-2 border-red-400">
                  <Image
                    src={"/" + record}
                    alt="Arsenal Logo"
                    width={100}
                    height={100}
                  />
                </div>
              );
            else return null;
          })}
        </div>
        <Button
          disabled={selectedImage === images.length - 1}
          onClick={() => setSelectedImage(selectedImage + 1)}
        >
          Right
        </Button>
      </div>
    </>
  );
}
