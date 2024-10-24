// import Products.tsx from "@/app/pages/products";
import { productsAPI } from "@/app/api/api";
import axios from "axios";
import { ProductType } from "@/types";
import Link from "next/link";
import React from "react";

// Нужно повыносить все fetchData в 1 общий файл (api.ts). getProducts() и getProduct()
const fetchData = () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());

// export const getStaticProps = async () => {
//     const res = await axios.get<ProductType[]>('https://fakestoreapi.com/products'); // замените на ваш API
//     const products = res.data;
//
//     return {
//         props: {
//             products,
//         },
//         revalidate: 60, // обновление данных каждые 60 секунд
//     };
// };

export default async function Home() {
  const products = await fetchData();

  return (
    <div>
      <h1>Products</h1>
      <main>
        {/*<PageProducts products={products}/>*/}
        <ul>
          {products.map(({ id, title }: ProductType) => (
            <li key={id}>
              <Link href={`/products/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
      {/* Если будешь делать футер, то его тоже нужно вынести в компонент */}
      <footer></footer>
    </div>
  );
}
