// import Products.tsx from "@/app/pages/products";
import {productsAPI} from "@/app/api/api";
import axios from "axios";
import {ProductType} from "@/types";
import Products from "@/app/pages";
import PageProducts from "@/app/pages";

async function fetchData() {
    //const res = await productsAPI.getProducts();
    // const result = await res.json();
    //return res;

    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json();
    return result;
}


export default  async function Home() {
     const products =  await fetchData();

  return (
      <div>
          <h1>Products</h1>
          <main>
              <PageProducts products={products}/>
          </main>
          <footer>

          </footer>
      </div>
  );
}
