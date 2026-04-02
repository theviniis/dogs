import { AccountHeaderWrapper } from '@/components/templates/account-header-wrapper'
import { ReactNode } from 'react'

export default async function AccountLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className="container">
      <AccountHeaderWrapper className="my-4" />
      {children}
    </main>
  )
}
