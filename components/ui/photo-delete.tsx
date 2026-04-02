'use client'
import { Photo } from '@/types/photo'
import { Button } from './button'
import { photoDelete } from '@/actions/photo-delete'

export type PhotoDeleteProps = {
  id: Photo['id']
}
export const PhotoDelete = ({ id }: PhotoDeleteProps) => {
  const handleClick = async () => await photoDelete(id)

  return (
    <Button variant="destructive" onClick={handleClick}>
      Deletar: {id}
    </Button>
  )
}
