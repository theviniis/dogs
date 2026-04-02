'use server'

import api from '@/lib/api'
import { postCommentSchema } from '@/schema/post-comment'
import { Comment } from '@/types/photo'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export const postComment = async (
  _prevState: CustomResponse<Comment>,
  formData: FormData
): Promise<CustomResponse<Comment>> => {
  const cookie = await cookies()
  const token = cookie.get('token')?.value

  const comment = formData.get('comment') as string | null
  const photoId = formData.get('photoId') as string | null

  try {
    if (!token) {
      throw new Error('Token not valid.')
    }

    if (!photoId) {
      throw new Error('Photo id not valid.')
    }

    const safeData = postCommentSchema.safeParse({
      comment,
      id: +photoId,
    })

    if (!safeData.success) {
      throw new Error('Invalid data.')
    }

    const [url, options] = api.postComment(safeData.data, token)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while posting comment.')
    }

    const data = (await response.json()) as Comment

    revalidateTag('comment', { expire: 0 })

    return {
      data,
      ok: true,
      error: null,
    }
  } catch (err) {
    return {
      ok: false,
      data: null,
      error: err.message,
    }
  }
}
