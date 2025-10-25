import { photosGet } from '@/actions/photos-get'
import FeedWrapper from '@/components/templates/feed-wrapper'

export default async function AppPage() {
  const data = await photosGet()

  return (
    <main>
      <FeedWrapper data={data} />
    </main>
  )
}
