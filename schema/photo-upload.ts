import z from 'zod'
import { MIN_ERROR } from './messages'

export const photoUploadSchema = z.object({
  name: z.string().min(3, MIN_ERROR(3)),
  weight: z.number().positive(),
  age: z.number().positive(),
  img: z.file(),
})

export type PhotoUploadSchema = z.infer<typeof photoUploadSchema>
