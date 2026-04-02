'use server'

import api from '@/lib/api'
import { Stat } from '@/types/stats'
import { cookies } from 'next/headers'

export const statsGet = async (): Promise<CustomResponse<Stat[]>> => {
  const cookie = await cookies()
  const token = cookie.get('token')?.value

  try {
    if (!token) {
      throw new Error('Token invalid.')
    }

    const [url, options] = api.statsGet(token)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while getting stats.')
    }

    const data = (await response.json()) as Stat[]

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
