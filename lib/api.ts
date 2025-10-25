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
