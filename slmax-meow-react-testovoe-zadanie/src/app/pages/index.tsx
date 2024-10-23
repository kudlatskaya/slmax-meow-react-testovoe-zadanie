//import Products.tsx from "@/app/pages/products";
import {productsAPI} from "@/app/api/api";
import axios from "axios";
import {ProductType} from "@/types";
import Link from "next/link";
// import Products from "@/app/components/Products";
import React from "react";

export const getStaticProps = async () => {
    const res = await axios.get<ProductType[]>('https://fakestoreapi.com/products'); // замените на ваш API
    const products = res.data;

    return {
        props: {
            products,
        },
        revalidate: 60, // обновление данных каждые 60 секунд
    };
};


const PageProducts = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageProducts;
