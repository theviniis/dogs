import { Photo as PhotoType } from '@/types/photo'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

const Photo = ({
  photo,
  index,
  className,
  ...props
}: { photo: PhotoType; index: number } & ComponentProps<'li'>) => {
  return (
    <li
      className={cn(
        className,
        'overflow-hidden rounded-sm nth-[2]:col-[2/4] nth-[2]:row-span-2'
      )}
      {...props}
    >
      <Link
        href={`/photo/${photo.id}`}
        scroll={false}
        className="group grid grid-cols-1 grid-rows-1 place-content-center"
      >
        <Image
          className="col-[1/1] row-[1/1]"
          src={photo.src}
          alt={photo.title}
          width={1500}
          height={1500}
          sizes="80vw"
          priority={index < 4}
        />
        <div className="bg-foreground/80 text-background col-[1/1] row-[1/1] hidden place-content-center transition-colors group-hover:grid"></div>
        <span className="text-background col-[1/1] row-[1/1] hidden items-center justify-center gap-2 transition group-hover:flex">
          <Eye />
          {photo.acessos}
        </span>
      </Link>
    </li>
  )
}

export type FeedProps = ComponentProps<'ul'>
const Feed = ({ className, ...props }: FeedProps) => {
  return <ul className={cn('grid grid-cols-3 gap-4', className)} {...props} />
}

const component = {
  Root: Feed,
  Photo,
}

export default component
