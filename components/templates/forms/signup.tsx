'use client'
import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { signUp } from '@/actions/signup'
import { SignUpReturnSchema } from '@/schema/signup'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { ErrorMessage } from '@/components/ui/error-message'
import { Label } from '@radix-ui/react-label'
import { useActionState, useEffect } from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { LogIn, LogOut } from 'lucide-react'

const initialState: CustomResponse<SignUpReturnSchema> = {
  data: null,
  error: null,
  ok: false,
}

export const SignUpForm = () => {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(signUp, initialState)

  useEffect(() => {
    if (state.ok) router.push('/account')
  }, [router, state.ok])

  return (
    <form action={formAction}>
      <Card className="border-0 shadow-none">
        <CardHeader>
          <CardTitle asChild>
            <h1>Sign up</h1>
          </CardTitle>
          <CardDescription>
            Enter your email and password belo to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <FormItem>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="username"
                type="text"
                defaultValue="dog"
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                defaultValue="dog@dog.com"
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                placeholder="password"
                defaultValue="dog"
              />
            </FormItem>

            <Button className="w-full" type="submit">
              <LogOut />
              Sign up
            </Button>

            <ErrorMessage>{state.error}</ErrorMessage>
          </div>
        </CardContent>

        <CardFooter className="flex w-full flex-col items-start gap-6">
          <div className="w-full space-y-6">
            <Separator />
          </div>
          <div className="space-y-2">
            <h2>Sign in</h2>
            <CardDescription>Already have an account? Sign in!</CardDescription>
            <Button variant="outline" asChild disabled={isPending}>
              <Link href="/auth/signin">
                <LogIn />
                Sign in
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
