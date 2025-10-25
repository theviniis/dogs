import { SignUpForm } from '@/components/templates/forms/signup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Sign up',
  description: 'Sign up with your data in Dogs platform.',
}

export default async function AuthSignUp() {
  return <SignUpForm />
}
