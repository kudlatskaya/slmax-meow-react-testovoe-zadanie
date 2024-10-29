// import Products.tsx.tsx from "@/app/pages/products";
import { productsAPI } from "@/app/api/api";
import axios from "axios";
import { ProductType } from "@/types";
import Link from "next/link";
import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Products from "@/app/components/Products";


// const fetchData = () =>
//   fetch("https://fakestoreapi.com/products").then((res) => res.json());

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
  const products = await productsAPI.getProducts()

  return (
    <div>
     <Header />
      <main>
          <Products products={products}/>
      </main>
     <Footer />
    </div>
  );
}
