'use client'

import { cn } from '@/lib/utils'
import { Comment } from '@/types/photo'
import { ComponentProps, useEffect, useRef } from 'react'

type ListProps = ComponentProps<'ul'> & {
  comments: Comment[]
}

const CommentsList = ({ className, comments, ...props }: ListProps) => {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0
  }, [comments])

  return (
    <ul
      ref={ref}
      className={cn(
        'space-y-2 overflow-y-auto scroll-smooth py-4 wrap-break-word',
        className
      )}
      {...props}
    />
  )
}

export default CommentsList
