'use server'

import api from '@/lib/api'
import { Photo, PhotoDetail } from '@/types/photo'

export const photoGet = async (
  id: Photo['id']
): Promise<CustomResponse<PhotoDetail>> => {
  try {
    const [url, options] = api.photoGet(id)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while getting photo.')
    }

    const data = await response.json()

    return {
      data,
      ok: true,
      error: null,
    }
  } catch (err) {
    return {
      data: null,
      ok: false,
      error: err.message,
    }
  }
}
