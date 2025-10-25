import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export const SuccessMessage = ({
  children,
  className,
  ...props
}: ComponentProps<'p'>) => {
  if (!children) return null
  return (
    <p
      className={cn(
        className,
        'rounded bg-green-500/5 p-2 text-sm text-green-500'
      )}
      {...props}
    >
      {children}
    </p>
  )
}
