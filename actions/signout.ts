'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const signOut = async () => {
  const cookie = await cookies()
  cookie.delete('token')
  redirect('/auth/signin')
}
