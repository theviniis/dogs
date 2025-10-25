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
    <li className={cn(className, 'overflow-hidden rounded-sm')} {...props}>
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
          <Eye size={16} />
          {photo.acessos}
        </span>
      </Link>
    </li>
  )
}

const Feed = ({ className, ...props }: ComponentProps<'ul'>) => {
  return (
    <ul
      className={cn(
        'container my-4 grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-4',
        className
      )}
      {...props}
    />
  )
}

const component = {
  Root: Feed,
  Photo,
}

export default component
