import { photoGet } from '@/actions/photo-get'
import PhotoContent from '@/components/molecules/photo-content'
import { Metadata } from 'next'

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

  const { data } = await photoGet(+id)

  return (
    <main className="container my-4 grid">
      <PhotoContent data={data} isSingle />
    </main>
  )
}
