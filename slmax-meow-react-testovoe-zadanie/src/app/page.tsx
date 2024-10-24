// import Products.tsx from "@/app/pages/products";
import {productsAPI} from "@/app/api/api";
import axios from "axios";
import {ProductType} from "@/types";
import Products from "@/app/pages";
import PageProducts from "@/app/pages";
import Link from "next/link";
import React from "react";

async function fetchData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json();
    return result;
}

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


export default  async function Home() {
     const products =  await fetchData();

  return (
      <div>
          <h1>Products</h1>
          <main>
              {/*<PageProducts products={products}/>*/}
              <ul>
                  {products.map((product) => (
                      <li key={product.id}>
                          <Link href={`/products/${product.id}`}>{product.title}</Link>
                      </li>
                  ))}
              </ul>
          </main>
          <footer>

          </footer>
      </div>
  );
}
