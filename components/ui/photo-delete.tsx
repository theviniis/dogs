'use client'
import { Photo } from '@/types/photo'
import { Button } from './button'
import { photoDelete } from '@/actions/photo-delete'
import { useTransition } from 'react'

export type PhotoDeleteProps = {
  id: Photo['id']
}
export const PhotoDelete = ({ id }: PhotoDeleteProps) => {
  const [isLoading, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      const config = window.confirm('Tem certeza que deseja deletar esta foto?')

      if (!config) return

      await photoDelete(id)
    })
  }

  return (
    <Button variant="destructive" onClick={handleClick} disabled={isLoading}>
      Deletar
    </Button>
  )
}
