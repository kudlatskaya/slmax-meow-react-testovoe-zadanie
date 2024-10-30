import React from 'react';

type Props = {
    title: string
}

const ProductTitle: React.FC<Props> = ({ title }: Props) => {
    return (
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
        </div>
    );
};

export default ProductTitle;