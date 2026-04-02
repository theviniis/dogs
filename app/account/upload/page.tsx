import { UploadPhotoForm } from '@/components/templates/forms/upload-photo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upload | My Account',
}

export default async function PostPage() {
  return <UploadPhotoForm />
}
