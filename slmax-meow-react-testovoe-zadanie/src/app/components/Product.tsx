"use client";

import { ProductType } from "@/types";
import Link from "next/link";
import {AddItemForm} from "@/app/components/AddItemForm";
import {EditableSpan} from "@/app/components/EditableSpan";
import {productsAPI} from "@/app/api/api";
import React, {useState} from "react";
import Button from "@/app/components/Button";



// Product это сущность, которая должна принимать не сам продукт, а только пропсы
// которые она отобразит, поэтому деструктуризация должна быть в таких компонентах


type Props = {
    product: ProductType
}

const Product: React.FC<Props>  = ({ product }: Props) => {

    const { title, description, price, image, id } = product

  return (
      <div>
          {/* Если компонент называется product, в нем не должно быть никакой инфы
            по мимо продукта, т.е кнопку назад нужно вынести в отдельный 
            компонент. И стараться декомпозировать практически все */}
          {/*<Link href="/">Назад</Link>*/}
          <Button>Назад</Button>
          <br/>

          <div className="bg-white">
              <div className="pt-6">

                  {/* Image gallery */}
                  <div
                      className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                          <img
                              alt={image}
                              src={image}
                              className="h-full w-full object-cover object-center"
                          />
                      </div>
                      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                              <img
                                  alt={image}
                                  src={image}
                                  className="h-full w-full object-cover object-center"
                              />
                          </div>
                          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                              <img
                                  alt={image}
                                  src={image}
                                  className="h-full w-full object-cover object-center"
                              />
                          </div>
                      </div>
                      <div
                          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                          <img
                              alt={image}
                              src={image}
                              className="h-full w-full object-cover object-center"
                          />
                      </div>
                  </div>

                  {/* Product info */}
                  <div
                      className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
                      </div>

                      {/* Options */}
                      <div className="mt-4 lg:row-span-3 lg:mt-0">
                          <h2 className="sr-only">Product information</h2>
                          <p className="text-3xl tracking-tight text-gray-900">{price}</p>
                      </div>

                      <div
                          className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                          {/* Description and details */}
                          <div>
                              <h3 className="sr-only">Description</h3>

                              <div className="space-y-6">
                                  <p className="text-base text-gray-900">{description}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default Product;


