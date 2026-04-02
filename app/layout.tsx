import type { Metadata } from 'next'
import { typeSecond } from '@/lib/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import HeaderWrapper from '@/components/templates/header-wrapper'
import FooterWrapper from '@/components/templates/footer-wrapper'
import { UserProvider } from '@/store/user-provider'
import { userGet } from '@/actions/user-get'
import { Inter } from "next/font/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await userGet()

  return (
    <UserProvider user={user}>
      <html lang="en" className={cn("font-sans", inter.variable)}>
        <body className={cn(typeSecond.variable, 'antialiased')}>
          <div className="flex min-h-[calc(100dvh+var(--footer-height))] flex-col">
            <HeaderWrapper />
            <main className="flex-1">
              <section>{children}</section>
            </main>
            <FooterWrapper />
          </div>
        </body>
      </html>
    </UserProvider>
  )
}
