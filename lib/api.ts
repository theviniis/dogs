import { SignInSchema } from '@/schema/signin'
import '../envConfig'
import { SignUpSchema } from '@/schema/signup'
import { PasswordLostSchema } from '@/schema/password-lost'
import { PasswordResetSchema } from '@/schema/password-reset'

const DEFAULT_URL = process.env.API_URL + '/json'

const photoGet = (): CustomApi => {
  return [
    DEFAULT_URL + '/api/photo',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: username,
        ...rest,
      }),
    },
  ]
}

const api = {
  photoGet,
  signIn,
  signUp,
  passwordLost,
  passwordReset,
}

export default api

// import { SignInSchema } from '@/schema/signin'
// import { SignUpSchema } from '@/schema/signup'

// import '../envConfig'

// export const createApi = (
//   url: string,
//   options: Replace<RequestInit, { body?: any }> = {}
// ): CustomApi => {
//   const { body, headers } = options

//   const DEFAULT_URL = process.env.API_URL + '/json'

//   return [
//     DEFAULT_URL + url,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         ...headers,
//       },
//       body: JSON.stringify(body),
//       ...options,
//     },
//   ]
// }

// const photoGet = (): CustomApi => {
//   return createApi('/api/photo')
// }

// const signIn = (data: SignInSchema): CustomApi => {
//   return createApi('/jwt-auth/v1/token', { method: 'POST', body: data })
// }

// const signUp = (data: SignUpSchema): CustomApi => {
//   return createApi('/api/user', { method: 'POST', body: data })
// }

// export default {
//   feed: {
//     photoGet,
//   },
//   auth: {
//     signIn,
//     signUp,
//   },
// }
