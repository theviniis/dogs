'use server'

import api, { PhotosGetParams } from '@/lib/api'
import { Photo } from '@/types/photo'

export const photosGet = async (
  params?: PhotosGetParams,
  optionsFront?: RequestInit
): Promise<CustomResponse<Photo[]>> => {
  try {
    const [url, options] = api.photosGet(params, optionsFront)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while getting photos.')
    }

    const data = (await response.json()) as Photo[]

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
