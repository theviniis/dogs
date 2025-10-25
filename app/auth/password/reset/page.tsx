import {
  PasswordResetForm,
  PasswordResetFormProps,
} from '@/components/templates/forms/password-reset'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Password reset',
  description: 'Reset your password.',
}

export default async function AuthResetPage({
  searchParams,
}: PasswordResetFormProps) {
  return <PasswordResetForm searchParams={await searchParams} />
}
