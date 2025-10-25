'use server'

import api from '@/lib/api'
import { Photo } from '@/types/photo'

export const photosGet = async () => {
  const [url] = api.photoGet()
  const response = await fetch(url)
  const data = await response.json()
  return data as Photo[]
}
