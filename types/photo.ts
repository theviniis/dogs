export type Photo = {
  id: number
  author: string
  title: string
  date: string
  src: string
  peso: string
  idade: string
  acessos: number
}

export type Comment = {
  comment_ID: string
  comment_post_ID: string
  comment_author: string
  comment_content: string
}

export type PhotoDetail = {
  photo: Photo
  comments: Comment[]
}
