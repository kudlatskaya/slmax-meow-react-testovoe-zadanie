// import { UpdateDomainTaskModelType } from 'features/TodolistsList/model/tasks/tasksSlice'
// import { TaskPriorities, TaskStatuses } from 'common/enums'
// import {Product} from "@/types";

// export type FieldErrorType = {
//     error: string
//     field: string
// }

//❗ Чтобы у нас не было пересечения имен наовем общий тип BaseResponseType
// export type Response<D = {}> = {
//     resultCode: number
//     messages: string[]
//     data: D
//     // fieldsErrors: FieldErrorType[]
// }

// export type DeleteProductArg = {
//     taskId: string
//     todolistId: string
// }

// export type AddTaskArg = {
//     title: string
//     todolistId: string
// }

// export type UpdateTaskArg = {
//     todolistId: string
//     taskId: string
//     domainModel: UpdateDomainTaskModelType
// }

// / export type UpdateTaskModelType = {
//     title: string
//     description: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
// }

// export type GetProductsResponse = {
//     error: string | null
//     totalCount: number
//     items: Product[]
// }
