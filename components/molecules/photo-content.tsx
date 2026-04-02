import { userGet } from '@/actions/user-get'
import { PhotoDetail } from '@/types/photo'
import Image from 'next/image'
import Link from 'next/link'
import { PhotoDelete } from '../ui/photo-delete'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { notFound } from 'next/navigation'

type PhotoContentProps = {
  data: PhotoDetail | null
  isSingle?: boolean
}

const PhotoContent = async ({ data, isSingle = false }: PhotoContentProps) => {
  if (!data) return notFound()
  const user = await userGet()

  const { photo } = data
  return (
    <div
      className={cn(
        'h-144 grid-cols-[minmax(20rem,40rem)] overflow-hidden',
        'md:max-h-[calc(100dvh - 4rem)] md:h-auto md:grid-cols-[36rem_20rem] md:overflow-y-auto',
        'bg-background m-auto grid grid-rows-[auto_1fr_auto] rounded',
        { 'h-auto grid-cols-1': isSingle }
      )}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        width={1000}
        height={1000}
        className={cn('grid-rows-[1/4] rounded md:row-1', {
          'rounded-lg': isSingle,
        })}
      />
      <div
        className="space-y-2 sm:mt-4 lg:px-6"
        // className={cn('p-[2rem_2rem_0_2rem]', {
        //   'p-[1rem_0px_0px_0px]': isSingle,
        // })}
      >
        <p className="flex items-center justify-between opacity-50">
          {user && user.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Button className="p-0" variant="link" asChild>
              <Link href={`/profile/${photo.author}`}>@{photo.author}</Link>
            </Button>
          )}
          <span className="flex items-center gap-2">
            <Eye size={16} />
            {photo.acessos}
          </span>
        </p>

        <h1>
          <Link href={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>

        <ul className="flex gap-8 text-lg font-bold">
          <li className="before:bg-foreground before:relative before:top-[3px] before:mr-2 before:inline-block before:h-4 before:w-0.5">
            {photo.peso} kg
          </li>
          <li className="before:bg-foreground before:relative before:top-[3px] before:mr-2 before:inline-block before:h-4 before:w-0.5">
            {photo.idade} anos
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PhotoContent
