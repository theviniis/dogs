import { CircleUser } from 'lucide-react'
import Header from '../molecules/header'
import { userGet } from '@/actions/user-get'

const HeaderWrapper = async () => {
  const user = await userGet()

  return (
    <Header.Root>
      <Header.Nav>
        <Header.Logo />
        {user ? (
          <Header.Option href="/account" variant="ghost">
            {user.username}
            <CircleUser />
          </Header.Option>
        ) : (
          <>
            <Header.Option href="/auth/signup">Sign up</Header.Option>
            <Header.Option href="/auth/signin" variant="default">
              Sign in
              <CircleUser />
            </Header.Option>
          </>
        )}
      </Header.Nav>
    </Header.Root>
  )
}

export default HeaderWrapper
