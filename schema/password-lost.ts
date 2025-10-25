import z from 'zod'

export const passwordLostSchema = z.object({
  email: z.email(),
  url: z.url(),
})

export type PasswordLostSchema = z.infer<typeof passwordLostSchema>

export type SignInReturnSchema = {
  token: string
  user_display_name: string
  user_email: string
  user_nicename: string
}
