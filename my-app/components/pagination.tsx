"use client";

import { Products } from "@/app/projects/pagination/page";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Pagination({
  data,
}: {
  data: { products: Products[] };
}) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageNumber = typeof page === "string" ? Number(page) : 1;

  const router = useRouter();
  const handleButtonClick = (pageNumber: number) => {
    router.push(`/projects/pagination?page=${pageNumber}&limit=10`);
  };
  const handlePageChange = (pageDirection: boolean) => {
    if (pageDirection) {
      router.push(`/projects/pagination?page=${pageNumber + 1}&limit=10`);
    } else {
      router.push(`/projects/pagination?page=${pageNumber - 1}&limit=10`);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-4/5">
        {data.products.map((item) => {
          return (
            <div className="bg-slate-400 m-4 px-6 py-7" key={item.id}>
              <div className="flex flex-col justify-center items-center w-[200px] h-[200px]">
                {" "}
                <Image
                  alt="product image"
                  src={item.thumbnail}
                  className="max-w-full max-h-full"
                  width={200}
                  height={200}
                />
                <span className="text-xs font-bold m-2">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <ArrowLeft
          className="cursor-pointer hover:scale-105"
          onClick={() => handlePageChange(false)}
        />
        {pages.map((page) => (
          <Button
            key={page}
            className="mx-4 my-2 py-2 px-4"
            variant={page === pageNumber ? "destructive" : "default"}
            onClick={() => handleButtonClick(page)}
          >
            {page}
          </Button>
        ))}
        <ArrowRight
          className="cursor-pointer hover:scale-105"
          onClick={() => handlePageChange(true)}
        />
      </div>
    </>
  );
}
