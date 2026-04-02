import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export const FileInput = ({
  className,
  type = 'file',
  ...props
}: ComponentProps<'input'>) => {
  return <input className={cn(className, '')} type={type} {...props} />
}
