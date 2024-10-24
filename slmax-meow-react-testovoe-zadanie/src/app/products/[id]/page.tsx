// pages/products/page.tsx
import axios from "axios";
//import { Product } from '../../../types'
import { ProductType } from "@/types";
import Product from "@/app/components/Product";
import { logAppDirError } from "next/dist/server/dev/log-app-dir-error";

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

const fetchData = (id: string) =>
  fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

const PageProduct: React.FC<Props> = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product: ProductType = await fetchData(id);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return <Product {...product} />;
};

export default PageProduct;
