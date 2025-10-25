declare type Replace<T, R> = Omit<T, keyof R> & R

declare type CustomResponse<D = null> = {
  ok: boolean
  data: D | null
  error: string | null
}

declare type CustomApi = [string, RequestInit | undefined]
