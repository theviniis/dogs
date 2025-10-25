'use server'

import api from '@/lib/api'
import { SignUpReturnSchema, signUpSchema } from '@/schema/signup'
import { signIn } from './signin'

export const signUp = async (
  _prevState: CustomResponse<SignUpReturnSchema>,
  formData: FormData
): Promise<CustomResponse<SignUpReturnSchema>> => {
  try {
    const payload = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const parsedData = signUpSchema.safeParse(payload)

    if (!parsedData.success) {
      throw new Error('Typed data are invalid.')
    }

    const [url, options] = api.signUp(parsedData.data)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Username and/or email are already in use.')
    }

    const data: SignUpReturnSchema = await response.json()

    const { ok } = await signIn(null, formData)

    if (!ok) {
      throw new Error('Error while sign in')
    }

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
