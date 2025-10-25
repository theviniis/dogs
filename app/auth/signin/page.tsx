import { SignInForm } from '@/components/templates/forms/signin'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Sign in',
  description: 'Sign in with your data in Dogs platform.',
}
export default async function AuthSignIn() {
  return <SignInForm />
}
