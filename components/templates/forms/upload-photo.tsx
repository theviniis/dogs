'use client'

import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/form'
import { ChangeEventHandler, useActionState, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { FileInput } from '@/components/ui/file-input'
import { uploadPhoto } from '@/actions/upload-photo'
import { ImagePreview } from '@/components/molecules/image-preview'

const initialState: CustomResponse = {
  data: null,
  error: null,
  ok: false,
}

export const UploadPhotoForm = () => {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(
    uploadPhoto,
    initialState
  )

  const [img, setImg] = useState('')

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (!target.files) return
    const imgPath = URL.createObjectURL(target.files[0])
    setImg(imgPath)
  }

  useEffect(() => {
    if (state.ok) router.push('/account')
  }, [router, state.ok])

  return (
    <section className="grid grid-cols-[1fr_460px]">
      <form action={formAction}>
        <Card className="border-0 shadow-none">
          <CardContent className="space-y-4">
            <FormItem>
              <Label htmlFor="nome">Name</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="nome"
                type="text"
                required
                defaultValue="dog"
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="peso">Peso</Label>
              <Input
                id="peso"
                name="peso"
                placeholder="peso"
                type="number"
                required
                defaultValue={1}
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="idade">Age</Label>
              <Input
                id="idade"
                name="idade"
                placeholder="idade"
                type="number"
                required
                defaultValue={1}
              />
            </FormItem>

            <FileInput
              id="img"
              name="img"
              required
              onChange={handleImageChange}
            />

            <Button className="w-full" type="submit" disabled={isPending}>
              Upload
            </Button>

            <ErrorMessage>{state.error}</ErrorMessage>
          </CardContent>
        </Card>
      </form>
      <ImagePreview path={img} />
    </section>
  )
}
