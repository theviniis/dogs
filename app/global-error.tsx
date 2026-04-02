'use client'

import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html>
      <body className="grid h-dvh place-content-center gap-4">
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <Button className="w-fit" onClick={() => unstable_retry()}>
          Try again
        </Button>
      </body>
    </html>
  )
}
