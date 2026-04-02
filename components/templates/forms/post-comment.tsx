'use client'

import { postComment } from '@/actions/post-comment'
import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ComponentProps, useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Comment } from '@/types/photo'

const initialState: CustomResponse<Comment> = {
  data: null,
  error: null,
  ok: false,
}

type PostCommentProps = ComponentProps<'form'> & {
  isSingle?: boolean
  photoId: number
}

const PostComment = ({
  className,
  isSingle = false,
  photoId,
  ...props
}: PostCommentProps) => {
  const [state, formAction, isPending] = useActionState(
    postComment,
    initialState
  )

  return (
    <form
      action={formAction}
      className={cn(className, 'flex flex-col gap-2', {
        'p-0': isSingle,
      })}
      {...props}
    >
      <ErrorMessage>{state.error}</ErrorMessage>

      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Textarea
          className="min-h-28"
          name="comment"
          id="comment"
          placeholder="Write your comment here..."
          required
          disabled={isPending}
        />
        <input
          name="photoId"
          id="photoId"
          type="hidden"
          value={photoId}
          className="hidden h-0 w-0"
          aria-hidden
        />
        <FormButton />
      </div>
    </form>
  )
}

const FormButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} variant="outline" className="h-full">
      <Image src="/assets/enviar.svg" alt="Submit" width={43} height={31} />
    </Button>
  )
}

export default PostComment
