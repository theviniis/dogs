import { PasswordLostForm } from '@/components/templates/forms/password-lost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogs | Password lost',
  description: 'Recover your password.',
}

export default async function PasswordLostPage() {
  return <PasswordLostForm />
}
