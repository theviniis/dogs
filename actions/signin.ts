'use server'
import api from '@/lib/api'
import { SignInReturnSchema, signInSchema } from '@/schema/signin'
import { cookies } from 'next/headers'

export const signIn = async (
  _prevState: CustomResponse<SignInReturnSchema>,
  formData: FormData
): Promise<CustomResponse<SignInReturnSchema>> => {
  try {
    const payload = {
      username: formData.get('username'),
      password: formData.get('password'),
    }

    const parsedData = signInSchema.safeParse(payload)

    if (!parsedData.success) {
      throw new Error('Typed data are invalid.')
    }

    const [url, options] = api.signIn(parsedData.data)

    const response = await fetch(url, options)

    if (!response.ok) throw new Error('Username and/or password are wrong.')

    const data: SignInReturnSchema = await response.json()

    const cookie = await cookies()

    cookie.set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    })

    return {
      data,
      error: null,
      ok: true,
    }
  } catch (err) {
    return {
      data: null,
      error: err.message,
      ok: false,
    }
  }
}
