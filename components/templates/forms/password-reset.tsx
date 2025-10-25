'use client'

import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/form'
import { useActionState, useEffect } from 'react'
import Link from 'next/link'
import { passwordReset } from '@/actions/password-reset'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ErrorMessage } from '@/components/ui/error-message'
import { PasswordInput } from '@/components/ui/password-input'
import { SuccessMessage } from '@/components/ui/success-message'
import { Label } from '@radix-ui/react-label'

const initialState: CustomResponse = {
  data: null,
  error: null,
  ok: false,
}

export type PasswordResetFormProps = {
  searchParams: {
    key: string
    login: string
  }
}

export const PasswordResetForm = ({ searchParams }: PasswordResetFormProps) => {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(
    passwordReset,
    initialState
  )

  useEffect(() => {
    if (state.ok) router.push('/auth/signin')
  }, [router, state.ok])

  return (
    <form action={formAction}>
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle asChild>
            <h1>Password reset?</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <FormItem>
            <Label htmlFor="password">New Password</Label>

            <PasswordInput
              id="password"
              name="password"
              placeholder="password"
              required
              defaultValue="dog"
            />
          </FormItem>

          {state.ok ? (
            <>
              <SuccessMessage>Email enviado.</SuccessMessage>
              <Button className="w-full" type="button">
                <Link href="/auth/signin">Sign in</Link>
              </Button>
            </>
          ) : (
            <Button className="w-full" type="submit" disabled={isPending}>
              Reset password
            </Button>
          )}

          <ErrorMessage>{state.error}</ErrorMessage>
        </CardContent>
      </Card>
      <input
        name="key"
        type="hidden"
        className="hidden h-0 w-0"
        value={searchParams.key}
      />
      <input
        name="username"
        type="hidden"
        className="hidden h-0 w-0"
        value={searchParams.login}
      />
    </form>
  )
}
