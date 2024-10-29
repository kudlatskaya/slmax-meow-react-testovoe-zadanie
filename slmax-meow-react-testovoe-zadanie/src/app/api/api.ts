import axios from 'axios'
//import {GetProductsResponse} from "@/app/api/types";
import { ProductType} from "@/types";

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  withCredentials: true,
})

export const productsAPI = {
  getProducts() {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  },
  getProduct(productId: string) {
    return fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json());
  },
  deleteProduct(productId: string) {
    return instance.delete<ProductType>(`products/${productId}`)
  },
  createProduct( model: ProductType) {
    return instance.post<ProductType>(`products}`, model)
  },
  updateProduct(productId: number, model: ProductType) {
    return fetch(`https://fakestoreapi.com/products/${productId}`,{
      method:"PUT",
      body:JSON.stringify(model)
    })
        .then(res=>res.json())
  },
}
