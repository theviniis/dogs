import { ReactNode } from 'react'

export default async function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-2">
      <div className="bg-[url(/assets/login.jpg)] bg-cover bg-center"></div>
      <div className="justify-self-strech p-8">{children}</div>
    </div>
  )
}
