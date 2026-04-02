import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Link from 'next/link'

const NoPostFound = () => {
  return (
    <div className="m-y-4 space-y-4">
      <p>No post found! 😥</p>
      <Button className="flex items-center gap-4" asChild>
        <Link href="/account/upload">
          <Upload />
          Upload Photo
        </Link>
      </Button>
    </div>
  )
}

export default NoPostFound
