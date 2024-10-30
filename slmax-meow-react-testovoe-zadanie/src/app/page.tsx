
import { productsAPI } from "@/app/api/api";
import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Products from "@/app/components/Products";



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
