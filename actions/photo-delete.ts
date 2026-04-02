'use server'

import api from '@/lib/api'
import { Photo } from '@/types/photo'

export const photoDelete = async (
  id: Photo['id']
): Promise<CustomResponse<null>> => {
  try {
    const [url, options] = api.photoDelete(id)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while deleting photo.')
    }

    return {
      data: null,
      ok: true,
      error: null,
    }
  } catch (err) {
    return {
      data: null,
      ok: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}
