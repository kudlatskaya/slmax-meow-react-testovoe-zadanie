"use client";

import { ProductType } from "@/types";
import Link from "next/link";

// Product это сущность, которая должна принимать не сам продукт, а только пропсы
// которые она отобразит, поэтому деструктуризация должна быть в таких компонентах

const Product = ({ title, description, price }: ProductType) => {
  return (
    <div>
      {/* Если компонент называется product, в нем не должно быть никакой инфы 
            по мимо продукта, т.е кнопку назад нужно вынести в отдельный 
            компонент. И стараться декомпозировать практически все */}
      <Link href="/">Назад</Link>
      <br />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Цена: {price}</p>
    </div>
  );
};

export default Product;
