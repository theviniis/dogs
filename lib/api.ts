import { SignInSchema } from '@/schema/signin'
import '../envConfig'
import { SignUpSchema } from '@/schema/signup'
import { PasswordLostSchema } from '@/schema/password-lost'
import { PasswordResetSchema } from '@/schema/password-reset'
import { Photo } from '@/types/photo'

const DEFAULT_URL = process.env.API_URL + '/json'

export type PhotosGetParams = {
  page?: number
  total?: number
  user?: 0 | string
}

const photoGet = (id: Photo['id']): CustomApi => {
  return [
    DEFAULT_URL + `/api/photo/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60, tags: ['photos', 'comment'] },
    },
  ]
}

const photosGet = (
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  options?: RequestInit
): CustomApi => {
  return [
    DEFAULT_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60, tags: ['photos'] },
      ...options,
    },
  ]
}

const signIn = (data: SignInSchema): CustomApi => {
  return [
    DEFAULT_URL + '/jwt-auth/v1/token',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ]
}

const signUp = (data: SignUpSchema): CustomApi => {
  return [
    DEFAULT_URL + '/api/user',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ]
}

const passwordLost = ({ email, url }: PasswordLostSchema): CustomApi => {
  return [
    DEFAULT_URL + '/api/password/lost',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url.replace('lost', 'reset'),
        login: email,
      }),
    },
  ]
}

const passwordReset = ({
  username,
  ...rest
}: PasswordResetSchema): CustomApi => {
  return [
    DEFAULT_URL + '/api/password/reset',
    {
      method: 'POST',
      headers: {
        'Content-Type': '',
      },
      body: JSON.stringify({
        login: username,
        ...rest,
      }),
    },
  ]
}

const userGet = (token: string): CustomApi => {
  return [
    DEFAULT_URL + '/api/user',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    },
  ]
}

const photoUpload = (formData: FormData, token: string): CustomApi => {
  return [
    DEFAULT_URL + '/api/photo',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  ]
}

const photoDelete = (id: number, token: string): CustomApi => {
  return [
    DEFAULT_URL + '/api/photo/' + id,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  ]
}

const api = {
  photosGet,
  signIn,
  signUp,
  passwordLost,
  passwordReset,
  userGet,
  photoUpload,
  photoGet,
  photoDelete,
}

export default api
