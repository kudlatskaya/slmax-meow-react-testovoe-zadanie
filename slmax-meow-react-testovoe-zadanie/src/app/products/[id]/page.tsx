import {ProductType} from "@/types";
import Product from "@/app/components/product/Product";
import {productsAPI} from "@/app/api/api";
import {useEffect, useState} from "react";
import {getProducts} from "@/app/page";

// export const generateStaticParams = async () => {
//     const products: ProductType[] = await getProducts();
//
//     return products.map((el) => ({
//         slug: el.id
//     }));
// };

const PageProduct: ({params: {id}}: { params: { id: number } }) => Promise<JSX.Element> = async ({
  params: {id},
  }: {
    params: { id: number };
}) => {

     let product: ProductType = await productsAPI.getProduct(id)



    // const changeProduct = async (data) => {
    //     productsAPI.updateProduct(data.id, data)
    //     product = await productsAPI.getProduct(data.id)
    // }


    if (!product) {
        return <div>Загрузка...</div>;
    }

     return <Product product={product} />;
};

export default PageProduct;
