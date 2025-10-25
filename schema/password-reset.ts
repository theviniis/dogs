import z from 'zod'
import { MIN_ERROR } from './messages'

export const passwordResetSchema = z.object({
  password: z.string().min(3, MIN_ERROR(3)),
  username: z.string().min(3, MIN_ERROR(3)),
  key: z.string(),
})

export type PasswordResetSchema = z.infer<typeof passwordResetSchema>
