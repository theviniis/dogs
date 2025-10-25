'use client'

import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/form'
import { SignInReturnSchema } from '@/schema/signin'
import { signIn } from '@/actions/signin'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import { Link } from 'lucide-react'

const initialState: CustomResponse<SignInReturnSchema> = {
  data: null,
  error: null,
  ok: false,
}

export const SignInForm = () => {
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(signIn, initialState)

  useEffect(() => {
    if (state.ok) router.push('/account')
  }, [router, state.ok])

  return (
    <form action={formAction}>
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle asChild>
            <h1>Sign in</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <FormItem>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="username"
              type="text"
              required
              defaultValue="dog"
            />
          </FormItem>

          <FormItem>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              name="password"
              placeholder="password"
              required
              defaultValue="dog"
            />
          </FormItem>

          <Button className="w-full" type="submit" disabled={isPending}>
            Sign in
          </Button>

          <ErrorMessage>{state.error}</ErrorMessage>
        </CardContent>

        <CardFooter className="flex w-full flex-col items-start gap-6">
          <div className="w-full space-y-6">
            <Separator />

            <Button className="h-0 p-0" variant="link" type="button" asChild>
              <Link href="/auth/password/lost">Lost your password?</Link>
            </Button>
          </div>

          <div className="space-y-2">
            <h2>Sign up</h2>

            <CardDescription>Dont have an account? Sign up!</CardDescription>

            <Button variant="outline" type="button" asChild>
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
