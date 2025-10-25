import { Photo } from '@/types/photo'
import Feed from '../molecules/feed'

type FeedWrapperProps = {
  data: Photo[]
}

const FeedWrapper = ({ data = [] }: FeedWrapperProps) => {
  return (
    <Feed.Root>
      {data.map((photo, index) => (
        <Feed.Photo key={photo.id} photo={photo} index={index} />
      ))}
    </Feed.Root>
  )
}

export default FeedWrapper
