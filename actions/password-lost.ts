'use server'

import api from '@/lib/api'
import { passwordLostSchema } from '@/schema/password-lost'

export const passwordLost = async (
  _state: CustomResponse,
  formData: FormData
): Promise<CustomResponse> => {
  try {
    const payload = { email: formData.get('email'), url: formData.get('url') }

    const safeData = passwordLostSchema.safeParse(payload)

    if (!safeData.success) {
      throw new Error('Email field are invalid.')
    }

    const [url, options] = api.passwordLost(safeData.data)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while reseting password.')
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
