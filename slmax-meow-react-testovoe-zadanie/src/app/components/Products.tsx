import React, {useContext} from 'react';
import {ProductType} from "@/types";
import Link from "next/link";
// import {ProductsContext} from '@/app/page'

type Props = {
    products: ProductType[]
}



const Products: React.FC<Props>  = ({ products }: Props) => {
    // const products = useContext(ProductsContext);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products && products.map(({id, image, title, price, category}: ProductType) => (
                        <div key={id} className="group relative">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt={image}
                                    src={image}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link href={`/products/${id}`}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {title}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;