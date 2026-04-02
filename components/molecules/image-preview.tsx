import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export const ImagePreview = ({
  className,
  path,
  style,
  ...props
}: ComponentProps<'div'> & { path?: string }) => {
  if (!path) return null
  return (
    <div
      className={cn(className, 'aspect-square w-full rounded-md')}
      style={{
        background: `url(${path}) no-repeat`,
        backgroundSize: 'cover',
        ...style,
      }}
      {...props}
    />
  )
}
