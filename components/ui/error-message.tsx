import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export const ErrorMessage = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => {
  if (!children) return null
  return (
    <p
      className={cn(
        className,
        'text-destructive rounded-4xl bg-red-500/5 px-3 py-2 text-sm'
      )}
      {...props}
    >
      {children}
    </p>
  )
}
