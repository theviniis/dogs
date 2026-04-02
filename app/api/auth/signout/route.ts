'use server'

import { signOut } from '@/actions/signout'

export async function GET() {
  await signOut()
}
