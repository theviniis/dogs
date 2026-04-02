import z from 'zod'
import { MIN_ERROR } from './messages'

export const postCommentSchema = z.object({
  comment: z.string().min(3, MIN_ERROR(3)),
  id: z.number().min(0),
})

export type PostCommentSchema = z.infer<typeof postCommentSchema>
