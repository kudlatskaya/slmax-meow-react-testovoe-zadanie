 import {productsAPI} from "@/app/api/api";
import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Products from "@/app/components/Products";
import {ProductType} from "@/types";

export const getProducts = () => {
    return productsAPI.getProducts()
}

// export const ProductsContext = React.createContext([]);

export default async function Home() {
    // const [products, setProducts] = useState<ProductType[]>(await productsAPI.getProducts())


    const products = await getProducts()

    return (
        <div>
            {/*<ProductsContext.Provider products={products}>*/}
                <Header/>
                <main>
                    <Products products={products}/>
                    {/*<Products />*/}
                </main>
                <Footer/>
            {/*</ProductsContext.Provider>*/}
        </div>
    );
}
