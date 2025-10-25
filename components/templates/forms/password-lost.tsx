'use client'

import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/form'
import { useActionState } from 'react'
import { passwordLost } from '@/actions/password-lost'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { SuccessMessage } from '@/components/ui/success-message'
import { Label } from '@radix-ui/react-label'

const initialState: CustomResponse = {
  data: null,
  error: null,
  ok: false,
}

export const PasswordLostForm = () => {
  const [state, formAction, isPending] = useActionState(
    passwordLost,
    initialState
  )

  return (
    <form action={formAction}>
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle asChild>
            <h1>Password Lost?</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <FormItem>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              name="email"
              placeholder="email"
              type="email"
              required
              defaultValue="dog@dog.com"
            />
          </FormItem>

          {state.ok ? (
            <>
              <SuccessMessage>Email enviado.</SuccessMessage>
              <Button className="w-full">
                <Link href="/auth/signin">Sign in</Link>
              </Button>
            </>
          ) : (
            <Button className="w-full" type="submit" disabled={isPending}>
              Send email
            </Button>
          )}

          <ErrorMessage>{state.error}</ErrorMessage>
        </CardContent>
      </Card>
      <input
        name="url"
        className="hidden h-0 w-0"
        type="hidden"
        value={window.location.href}
      />
    </form>
  )
}
