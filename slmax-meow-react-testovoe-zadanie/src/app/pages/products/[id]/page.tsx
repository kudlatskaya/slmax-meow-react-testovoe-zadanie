// pages/products/page.tsx
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
//import { Product } from '../../../types'
import { ProductType } from '@/types'
import Product from "@/app/components/Product";

type Props = {
    product: ProductType;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get<ProductType[]>('https://fakestoreapi.com/products'); // замените на ваш API
    const products = res.data;

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: 'blocking' }; // Используем 'blocking' для ISR
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const res = await axios.get<ProductType>(`https://fakestoreapi.com/products/${params?.id}`); // замените на ваш API
    const product = res.data;

    return {
        props: {
            product,
        },
        revalidate: 60, // обновление данных каждые 60 секунд
    };
};

const PageProduct: React.FC<Props> = ({ product }) => {

    if (!product) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <Product product={product}/>
        </div>
    );
};

export default PageProduct;