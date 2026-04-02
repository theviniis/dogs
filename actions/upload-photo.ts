'use server'

import api from '@/lib/api'
import { photoUploadSchema } from '@/schema/photo-upload'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const uploadPhoto = async (
  _prevState: CustomResponse,
  formData: FormData
): Promise<CustomResponse> => {
  try {
    const token = (await cookies()).get('token')?.value
    const nome = formData.get('nome') as string | null
    const idade = Number(formData.get('idade'))
    const peso = Number(formData.get('peso'))
    const img = formData.get('img') as File

    const safeData = photoUploadSchema.safeParse({
      name: nome,
      weight: peso,
      age: idade,
      img,
    })

    if (!safeData.success) {
      throw new Error('Invalid data.')
    }

    if (!token) {
      throw new Error('Token not found.')
    }

    const [url, options] = api.photoUpload(formData, token)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error while uploading photo.')
    }
  } catch (err) {
    return {
      ok: false,
      data: null,
      error: err.message,
    }
  }

  revalidateTag('photos', { expire: 0 })
  redirect('/account')
}
