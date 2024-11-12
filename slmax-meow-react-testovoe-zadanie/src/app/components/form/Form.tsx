import React, {useCallback} from 'react';
import XMark from "@/assets/icons/X-mark";
import Button from "@/app/components/form/Button";
import Input from "@/app/components/form/Input";
import {productsAPI} from "@/app/api/api";
import {useForm} from "react-hook-form";
import {FormValues, loginSchema} from "./validation"
import {ProductType} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";

const Form = ({active, setActive, data, setData}: {
    active: boolean,
    setActive: (active: boolean) => void,
    data: ProductType,
    setData: (data: ProductType) => void,
}) => {

    const {register, handleSubmit, getValues} = useForm<FormValues & ProductType>({
        defaultValues: {
            title: data.title,
            price: data.price,
            image: data.image,
            description: data.description,
            category: data.category,
            rate: data.rating?.rate,
            count: data.rating?.count,
        },
        resolver: zodResolver(loginSchema),
    });
    console.log('Product')
    const closeModel = () => {
        setActive(false)
    }

    const onSubmit = useCallback(async () => {
        const productData = getValues();
        setData(productData)
        // productsAPI.updateProduct(productData.id, productData)
        // let product: ProductType = await productsAPI.getProduct(productData.id)
        setActive(false)
        // console.log(productData)
    }, [getValues]);

    return (
        <>
            {
                active &&

                <html className="h-full bg-white">
                <body className="h-full">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex justify-end">
                            <Button title={''} callBack={closeModel}><XMark/></Button>
                        </div>
                        <div>
                            <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                Change the product information
                            </h2>
                        </div>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <Input label={"Product name"}
                                   id={"title"}
                                   {...register("title")}
                                   type={"text"}
                                   required={true}
                                   autoComplete={"name"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product image"}
                                   id={"file"}
                                   {...register("image")}
                                   type={"file"}
                                   required={true}
                                   inputClassName={"block w-full  py-1.5 text-gray-900   placeholder:text-gray-400  sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product price"}
                                   id={"price"}
                                   {...register("price")}
                                   type={"number"}
                                   required={true}
                                   autoComplete={"number"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <div>
                                <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                                    Product description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        {...register("description")}
                                        autoComplete="description"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <Input label={"Product category"}
                                   id={"category"}
                                   {...register("category")}
                                   type={"text"}
                                   autoComplete={"category"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product rate"}
                                   id={"rate"}
                                   {...register("rate")}
                                   type={"number"}
                                   autoComplete={"number"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product count"}
                                   id={"count"}
                                   {...register("count")}
                                   type={"number"}
                                   autoComplete={"count"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <div>
                                <Button title={'Save'}
                                        type={"submit"}
                                        className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                        callBack={onSubmit}></Button>
                            </div>
                        </form>
                    </div>

                </div>
                </body>
                </html>
            }
        </>
    );
};

export default Form;
