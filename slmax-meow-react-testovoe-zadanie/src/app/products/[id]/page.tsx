"use client"
// pages/products/page.tsx
//import { Product } from '../../../types'
import {ProductType} from "@/types";
import Product from "@/app/components/Product";
import {productsAPI} from "@/app/api/api";
import {useState} from "react";

type Props = {
    product: ProductType;
    params: { id: string };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await axios.get<ProductType[]>('https://fakestoreapi.com/products'); // замените на ваш API
//     const products = res.data;

//     const paths = products.map((product) => ({
//         params: { id: product.id.toString() },
//     }));

//     return { paths, fallback: 'blocking' }; // Используем 'blocking' для ISR
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//     const res = await axios.get<ProductType>(`https://fakestoreapi.com/products/${params?.id}`); // замените на ваш API
//     const product = res.data;

//     return {
//         props: {
//             product,
//         },
//         revalidate: 60, // обновление данных каждые 60 секунд
//     };
// };

// const fetchData = (id: string) =>
//     fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

const PageProduct: React.FC<Props> = async ({
  params: {id},
  }: {
    params: { id: string };
}) => {


    const product: ProductType = await productsAPI.getProduct(id)

    let {title, description, price, image} = product

    // const [_title, setTitle] = useState(title)
    // const [_image, setImage] = useState(image)
    // const [_description, setDescription] = useState(description)
    // const [_price, setPrice] = useState(price)
    //
    // const changeProductHandler = (_title: string) => {
    //     let model: ProductType = {
    //         id,
    //         title: _title,
    //         description: _description,
    //         price: _price,
    //         image: _image,
    //     }
    //     productsAPI.updateProduct(id, model)
    // }


    if (!product) {
        return <div>Загрузка...</div>;
    }

    // return <Product {...product} />;
    return <Product product={product} />;
};

export default PageProduct;
