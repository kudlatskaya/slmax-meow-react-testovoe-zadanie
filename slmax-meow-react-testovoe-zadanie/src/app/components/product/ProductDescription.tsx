import React from 'react';

type Props = {
    description: string | undefined,
}

const ProductDescription: React.FC<Props> = ({ description }: Props) => {
    return (
        <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
            </div>
        </div>
    );
};

export default ProductDescription;