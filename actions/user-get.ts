'use server'

import api from '@/lib/api'
import { User } from '@/types/user'
import { cookies } from 'next/headers'

export const userGet = async () => {
  const cookie = await cookies()
  const token = cookie.get('token')

  try {
    if (!token?.value) {
      throw new Error('Token not valid.')
    }

    const [url, options] = api.userGet(token.value)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while getting user.')
    }

    const data: User = await response.json()

    return data
  } catch {
    return null
  }
}
