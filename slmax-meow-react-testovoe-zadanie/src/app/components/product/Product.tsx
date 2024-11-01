"use client";

import {ProductType} from "@/types";
import React, {useState} from "react";
import Button from "@/app/components/form/Button";
import {useRouter} from 'next/navigation'
import ArrowLeft from "@/assets/icons/Arrow_left";
import Gallery from "@/app/components/product/Gallery";
import ProductInfo from "@/app/components/product/ProductInfo";
import PencilSquare from "@/assets/icons/Pencil_square";
import s from '../../styles/Product.module.css'
import Form from "@/app/components/form/Form";


// Product это сущность, которая должна принимать не сам продукт, а только пропсы
// которые она отобразит, поэтому деструктуризация должна быть в таких компонентах


const Product: React.FC<ProductType> = ({title, description, price, image}: ProductType) => {
    const [modalActive, setModalActive] = useState(false);

    const router = useRouter()


    return (
        <>
            {modalActive
                ? <div>
                    {/* Если компонент называется product, в нем не должно быть никакой инфы
            по мимо продукта, т.е кнопку назад нужно вынести в отдельный 
            компонент. И стараться декомпозировать практически все */}
                    <div className={`${s.buttonContainer} m-6`}>
                        <Button title={''} callBack={() => router.push('/')}><ArrowLeft/></Button>
                        <Button title={''} callBack={() => setModalActive(true)}><PencilSquare/></Button>
                    </div>
                    <div className="bg-white">
                        <div className="pt-6">

                            {/* Image gallery */}
                            <Gallery image={image}/>

                            {/* Product info */}
                            <ProductInfo title={title} price={price} description={description}/>
                        </div>
                    </div>
                </div>
                : <Form active={modalActive} setActive={setModalActive}/>
            }
        </>
    );
};

export default Product;


