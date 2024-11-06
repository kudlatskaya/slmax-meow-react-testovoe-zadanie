import React from 'react';
import XMark from "@/assets/icons/X-mark";
import Button from "@/app/components/form/Button";
import Input from "@/app/components/form/Input";

const Form = ({active, setActive}: { active: boolean, setActive: (active: boolean) => void }) => {

    const closeModel = () => {
        setActive(false)
    }

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
                        <form action="#" method="POST" className="space-y-6">
                            <Input label={"Product name"}
                                   id={"name"}
                                   name={"name"}
                                   type={"text"}
                                   required={true}
                                   autoComplete={"name"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product image"}
                                   id={"file"}
                                   name={"file"}
                                   type={"file"}
                                   required={true}
                                   inputClassName={"block w-full  py-1.5 text-gray-900   placeholder:text-gray-400  sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product price"}
                                   id={"price"}
                                   name={"price"}
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
                                        name="description"
                                        autoComplete="description"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <Input label={"Product category"}
                                   id={"category"}
                                   name={"category"}
                                   type={"text"}
                                   autoComplete={"category"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product rate"}
                                   id={"rate"}
                                   name={"rate"}
                                   type={"number"}
                                   autoComplete={"number"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <Input label={"Product count"}
                                   id={"count"}
                                   name={"count"}
                                   type={"number"}
                                   autoComplete={"count"}
                                   inputClassName={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"}
                                   labelClassName={"block text-sm/6 font-medium text-gray-900"}
                            />

                            <div>
                                {/*<button*/}
                                {/*    type="submit"*/}
                                {/*    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*    onClick={closeModel}*/}
                                {/*>*/}
                                {/*    Save*/}
                                {/*</button>*/}
                                <Button title={'Save'}
                                        className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                        callBack={closeModel}></Button>
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
