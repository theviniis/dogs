import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'
import { ComponentProps } from 'react'

const Logo = ({
  src = '/assets/dogs-footer.svg',
  alt = 'Dogs Logo',
  width = 28,
  height = 22,
  ...props
}: Replace<ImageProps, { src?: string; alt?: string }>) => {
  return (
    <Image
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}

const Description = ({
  children = 'Dogs. Some rights reserved.',
  className,
  ...props
}: ComponentProps<'p'>) => {
  return (
    <p className={cn('', className)} {...props}>
      {children}
    </p>
  )
}

const Footer = ({ className, ...props }: ComponentProps<'footer'>) => {
  return (
    <footer
      className={cn(
        'bg-primary text-primary-foreground flex h-(--footer-height) flex-col items-center justify-center gap-2',
        className
      )}
      {...props}
    />
  )
}

const component = {
  Root: Footer,
  Logo,
  Description,
}

export default component
