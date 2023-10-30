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
      <div className="mx-52 flex h-4/5 flex-wrap items-center justify-center">
        {data.products.map((item) => {
          return (
            <div className="m-4 bg-slate-400 px-6 py-7" key={item.id}>
              <div className="flex h-[200px] w-[200px] flex-col items-center justify-center">
                {" "}
                <Image
                  alt="product image"
                  src={item.thumbnail}
                  className="max-h-full max-w-full"
                  width={200}
                  height={200}
                />
                <span className="m-2 text-xs font-bold">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center">
        <Button
          onClick={() => handlePageChange(false)}
          disabled={pageNumber === 1}
        >
          <ArrowLeft className="hover:scale-105" />
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            className="mx-4 my-2 px-4 py-2"
            variant={page === pageNumber ? "destructive" : "default"}
            onClick={() => handleButtonClick(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChange(true)}
          disabled={pageNumber === 10}
        >
          <ArrowRight className="cursor-pointer hover:scale-105" />
        </Button>
      </div>
    </>
  );
}
