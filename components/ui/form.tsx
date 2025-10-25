'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="form-item"
      className={cn('grid gap-2', className)}
      {...props}
    />
  )
}

export { FormItem }
