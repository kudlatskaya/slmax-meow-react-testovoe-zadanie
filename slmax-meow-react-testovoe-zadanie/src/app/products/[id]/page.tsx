"use client"

import {ProductType} from "@/types";
import Product from "@/app/components/product/Product";
import {productsAPI} from "@/app/api/api";

type Props = {
    product: ProductType;
    params: { id: string };
};


const PageProduct: ({params: {id}}: { params: { id: string } }) => Promise<JSX.Element> = async ({
  params: {id},
  }: {
    params: { id: string };
}) => {

    const product: ProductType = await productsAPI.getProduct(id)

    if (!product) {
        return <div>Загрузка...</div>;
    }

     return <Product {...product} />;
};

export default PageProduct;
