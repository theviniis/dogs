'use server'

import api from '@/lib/api'
import { Photo } from '@/types/photo'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const photoDelete = async (
  id: Photo['id']
): Promise<CustomResponse<null>> => {
  const cookie = await cookies()

  const token = cookie.get('token')?.value

  try {
    if (!token) {
      throw new Error('Token not valid.')
    }

    const [url, options] = api.photoDelete(id, token)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while deleting photo.')
    }
  } catch (err) {
    return {
      data: null,
      ok: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }

  revalidateTag('photos', { expire: 0 })
  redirect('/account')
}
