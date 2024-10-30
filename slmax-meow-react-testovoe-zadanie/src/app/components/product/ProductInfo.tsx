import React from 'react';
import ProductTitle from "@/app/components/product/ProductTitle";
import ProductDescription from "@/app/components/product/ProductDescription";
import ProductPrice from "@/app/components/product/ProductPrice";

type Props = {
    title: string,
    price: number,
    description: string | undefined,
}

const ProductInfo: React.FC<Props> = ({ title, price, description }: Props) => {
    return (
        <div
            className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
           <ProductTitle title={title}/>

            {/* Options */}
            <ProductPrice price={price}/>

            <div
                className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
               <ProductDescription  description={description}/>
            </div>
        </div>
    );
};

export default ProductInfo;