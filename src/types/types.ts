export interface ICredentials {
  token: string
  user: User
}

export interface User {
  id: string
  email: string
  type: 'user'
}

interface GifImage {
  url: string,
  width: number
  height: number
}
export interface GifObject {
  id: string
  slug: string
  type: string
  url: string
  bitly_url: string
  embed_url: string
  alt_text: string
  images: {
    preview: GifImage
    preview_gif: GifImage
  }
}

export interface GifPagination {
  offset: number
  total_count: number
  count: number
}
export interface GifRes {
  data: GifObject[]
  pagination: GifPagination
  meta: any
}
