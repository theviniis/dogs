import { photosGet } from '@/actions/photos-get'
import { userGet } from '@/actions/user-get'
import NoPostFound from '@/components/molecules/no-post-found'
import FeedWrapper from '@/components/templates/feed-wrapper'

export default async function AccountPage() {
  const user = await userGet()
  const { data = [] } = await photosGet({ user: user?.username })

  if (!data?.length) {
    // TODO: Create no post component
    return <NoPostFound />
  }

  return <FeedWrapper data={data} username={user?.username} className="mb-4" />
}
