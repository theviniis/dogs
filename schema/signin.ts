import z from 'zod'
import { MIN_ERROR } from './messages'

export const signInSchema = z.object({
  username: z.string().min(3, MIN_ERROR(3)),
  password: z.string().min(3, MIN_ERROR(3)),
})

export type SignInSchema = z.infer<typeof signInSchema>

export type SignInReturnSchema = {
  token: string
  user_display_name: string
  user_email: string
  user_nicename: string
}
