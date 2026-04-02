import { photosGet } from '@/actions/photos-get'
import FeedWrapper from '@/components/templates/feed-wrapper'

export default async function AppPage() {
  const { data } = await photosGet()
  if (!data) return null

  return <FeedWrapper className="container my-4" data={data} />
}
