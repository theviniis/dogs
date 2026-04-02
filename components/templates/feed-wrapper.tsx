'use client'

import { Photo } from '@/types/photo'
import Feed, { FeedProps } from '../molecules/feed'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { photosGet } from '@/actions/photos-get'
import { User } from '@/types/user'
import Loading from '../molecules/loading'

const TOTAL_PHOTOS = 6

type FeedWrapperProps = {
  data: Photo[]
  username?: User['username']
} & FeedProps

const FeedWrapper = ({ data = [], username, ...props }: FeedWrapperProps) => {
  const debounce = useDebounce()

  const isFetching = useRef(false)

  const [photosFeed, setPhotosFeed] = useState<Photo[]>(data)
  const [page, setPage] = useState(1)
  const [isInfinity, setIsInfinity] = useState(
    data.length < TOTAL_PHOTOS ? false : true
  )

  const [isLoading, transition] = useTransition()

  const infiniteScroll = useCallback(() => {
    if (isFetching.current) return
    isFetching.current = true
    debounce(() => {
      setPage((currentPage) => currentPage + 1)
      isFetching.current = false
    })
  }, [debounce])

  useEffect(() => {
    if (page === 1) return

    const getPagePhotos = async (page: number) => {
      const { data } = await photosGet(
        {
          page,
          total: TOTAL_PHOTOS,
          user: username ?? 0,
        },
        { cache: 'no-cache' }
      )

      if (!!data) {
        setPhotosFeed((prev) => [...prev, ...data])
        if (data.length < TOTAL_PHOTOS) setIsInfinity(false)
      }
    }

    transition(() => getPagePhotos(page))
  }, [page, username])

  useEffect(() => {
    if (isInfinity) {
      window.addEventListener('scroll', infiniteScroll)
      window.addEventListener('wheel', infiniteScroll)
    } else {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [infiniteScroll, isInfinity])

  return (
    <div>
      <Feed.Root {...props}>
        {photosFeed.map((photo, index) => (
          <Feed.Photo key={photo.id} photo={photo} index={index} />
        ))}
      </Feed.Root>
      <div className="grid-place-content-center mx-auto my-4 h-[100px]">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid h-full place-content-center">
            <p className="text-accent-foreground">That is all! 😉</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeedWrapper
