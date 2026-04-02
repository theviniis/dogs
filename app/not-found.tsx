import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="p-auto container grid h-dvh place-content-center gap-4">
      <h1>Page Not Found</h1>
      <Button className="w-fit">
        <Link href="/">Go home</Link>
      </Button>
    </section>
  )
}
