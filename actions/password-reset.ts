'use server'

import api from '@/lib/api'
import { passwordResetSchema } from '@/schema/password-reset'

export const passwordReset = async (
  _prevState: CustomResponse,
  formData: FormData
): Promise<CustomResponse> => {
  try {
    const payload = {
      password: formData.get('password'),
      username: formData.get('username'),
      key: formData.get('key'),
    }

    const safeData = passwordResetSchema.safeParse(payload)

    if (!safeData.success) {
      throw new Error('Username field are invalid.')
    }

    const [url, options] = api.passwordReset(safeData.data)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Not authorized.')
    }

    const data = await response.json()

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
