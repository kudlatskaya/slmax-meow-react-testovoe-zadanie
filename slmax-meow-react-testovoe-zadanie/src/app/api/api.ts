import axios from 'axios'
import {GetProductsResponse} from "@/app/api/types";
import {Product} from "@/types";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    withCredentials: true,
})

export const productsAPI = {
    getProducts() {
        return instance.get<any>(`products`)
    },
    /*deleteProduct(arg: DeleteTaskArg) {
        return instance.delete<Response>(`todo-lists/${arg.todolistId}/tasks/${arg.taskId}`)
    },
    createTask(arg: AddTaskArg) {
        return instance.post<Response<{ item: TaskType }>>(`todo-lists/${arg.todolistId}/tasks`, {
            title: arg.title,
        })
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<Response<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    },*/
}