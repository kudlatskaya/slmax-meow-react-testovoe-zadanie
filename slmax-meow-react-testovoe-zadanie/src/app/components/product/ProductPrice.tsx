import React from 'react';

type Props = {
    price: number
}

const ProductPrice: React.FC<Props> = ({ price }: Props) => {
    return (
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{price}</p>
        </div>
    );
};

export default ProductPrice;