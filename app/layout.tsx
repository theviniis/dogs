import type { Metadata } from 'next'
import { typeSecond } from '@/lib/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import HeaderWrapper from '@/components/templates/header-wrapper'
import FooterWrapper from '@/components/templates/footer-wrapper'

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
  )
}
