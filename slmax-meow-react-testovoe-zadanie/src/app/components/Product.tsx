'use client'

import Link from "next/link";

const Product = ({ product }) => {
    return (
        <div>
            <Link href='/'>Назад</Link><br/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Цена: {product.price}</p>
        </div>
    );
};

export default Product;