import { userGet } from '@/actions/user-get'
import { PhotoDetail } from '@/types/photo'
import NextImage from 'next/image'
import Link from 'next/link'
import { PhotoDelete } from '../ui/photo-delete'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { ComponentProps } from 'react'

type PhotoContentProps = {
  isSingle?: boolean
}

const Root = async ({
  // data,
  isSingle = false,
  className,
  ...props
}: PhotoContentProps & ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid-cols-[minmax(20rem,40rem)] overflow-hidden',
        'md:h-144 md:grid-cols-[36rem_20rem] md:overflow-y-auto',
        'bg-background m-auto grid grid-rows-[auto_1fr_auto]',
        { 'h-auto grid-cols-1': isSingle },
        className
      )}
      {...props}
    />
  )
}

const Image = ({
  src,
  alt,
  className,
  ...props
}: ComponentProps<typeof NextImage> & { className?: string }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      className={cn('grid-rows-[1/4] rounded-4xl md:row-1', className)}
      {...props}
    />
  )
}

const Meta = ({
  photo,
  user,
}: {
  photo: PhotoDetail['photo']
  user: Awaited<ReturnType<typeof userGet>>
}) => {
  return (
    <p className="flex items-center justify-between opacity-50">
      {user && user.username === photo.author ? (
        <PhotoDelete id={photo.id} />
      ) : (
        <Button className="p-0" variant="link" asChild>
          <Link href={`/profile/${photo.author}`}>@{photo.author}</Link>
        </Button>
      )}
      <Views count={photo.acessos} />
    </p>
  )
}

const Views = ({ count }: { count: number }) => {
  return (
    <span className="flex items-center gap-2">
      <Eye size={16} />
      {count}
    </span>
  )
}

const Title = ({
  photo,
  isSingle,
}: {
  photo: PhotoDetail['photo']
  isSingle?: boolean
}) => {
  return (
    <h1>
      <Link
        href={`/photo/${photo.id}`}
        className={cn({ 'rounded-lg': isSingle })}
      >
        {photo.title}
      </Link>
    </h1>
  )
}

const Stats = ({ photo }: { photo: PhotoDetail['photo'] }) => {
  return (
    <ul className="flex gap-8 text-lg font-bold">
      <li className="before:bg-foreground before:relative before:top-[3px] before:mr-2 before:inline-block before:h-4 before:w-0.5">
        {photo.peso} kg
      </li>
      <li className="before:bg-foreground before:relative before:top-[3px] before:mr-2 before:inline-block before:h-4 before:w-0.5">
        {photo.idade} anos
      </li>
    </ul>
  )
}

type InfoProps = ComponentProps<'div'>

const Info = ({ className, ...props }: InfoProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-[auto_auto_auto_1fr_auto] space-y-2 overflow-hidden lg:px-6',
        className
      )}
      {...props}
    />
  )
}

const component = {
  Root,
  Image,
  Info: {
    Root: Info,
    Meta,
    Title,
    Stats,
  },
}

export default component
