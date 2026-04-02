import { photoGet } from '@/actions/photo-get'
import { userGet } from '@/actions/user-get'
import PhotoContent from '@/components/molecules/photo-content'
import PhotoComments from '@/components/molecules/comments'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PhotoIdParams = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({
  params,
}: PhotoIdParams): Promise<Metadata> => {
  const { id } = await params

  const { data } = await photoGet(+id)

  if (!data)
    return {
      title: 'Photo',
    }
  return {
    title: data?.photo.title,
  }
}

export default async function PhotoIdPage({ params }: PhotoIdParams) {
  const { id } = await params

  const { data: photoData } = await photoGet(+id)

  if (!photoData) return notFound()

  const { photo, comments } = photoData

  const user = await userGet()

  return (
    <main className="container my-4 grid">
      <PhotoContent.Root>
        <PhotoContent.Image src={photo.src} alt={photo.title} />
        <PhotoContent.Info.Root>
          <PhotoContent.Info.Meta photo={photo} user={user} />
          <PhotoContent.Info.Title photo={photo} />
          <PhotoContent.Info.Stats photo={photo} />
          <PhotoComments.List comments={comments}>
            {comments.reverse().map((comment) => (
              <PhotoComments.Comment
                key={comment.comment_ID}
                comment={comment}
              />
            ))}
          </PhotoComments.List>
          {user && <PhotoComments.Post photoId={photo.id} />}
        </PhotoContent.Info.Root>
      </PhotoContent.Root>
    </main>
  )
}
