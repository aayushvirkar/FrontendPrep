export type Products = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};

import Pagination from "@/components/pagination";
async function getData(limit: number, skip: number) {
  const paginationData = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );

  if (!paginationData.ok) {
    throw new Error("Failed to fetch data");
  }

  return paginationData.json();
}

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;

  const skip = (page - 1) * limit;

  const data: { products: Products[] } = await getData(limit, skip);

  return (
    <>
      <Pagination data={data} />
    </>
  );
}
