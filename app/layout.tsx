import type { Metadata } from 'next'
import { typeSecond } from '@/lib/fonts'
import './globals.css'
import { cn } from '@/lib/utils'

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
      <body className={cn(typeSecond.variable, 'antialiased')}>{children}</body>
    </html>
  )
}
