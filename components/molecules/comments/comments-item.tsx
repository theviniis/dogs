import { cn } from '@/lib/utils'
import { Comment } from '@/types/photo'
import { ComponentProps } from 'react'

type CommentProps = ComponentProps<'li'> & {
  comment: Comment
}

const CommentsItem = ({ comment, className, ...props }: CommentProps) => {
  return (
    <li className={cn(className, 'flex items-center gap-2')} {...props}>
      <b>{comment.comment_author}:</b>
      <p>{comment.comment_content}</p>
    </li>
  )
}

export default CommentsItem
