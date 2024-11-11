import {z} from 'zod'

export const loginSchema = z
    .object({

        title: z.string().min(3, {message: 'Invalid title'}),
        price: z.number({message: 'Price should be a number'}),
        image: z.string().trim(),
        description: z.string(),
        category: z.string(),
        rate: z.number(),
        count: z.number(),
    })
    .partial()

export type FormValues = z.infer<typeof loginSchema>

