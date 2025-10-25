import z from 'zod'
import { MIN_ERROR } from './messages'

export const signUpSchema = z.object({
  username: z.string().min(3, MIN_ERROR(3)),
  email: z.email(),
  password: z.string().min(3, MIN_ERROR(3)),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export type SignUpReturnSchema = { data: number }
