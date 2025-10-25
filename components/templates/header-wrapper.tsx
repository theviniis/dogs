import { CircleUser } from 'lucide-react'
import Header from '../molecules/header'

const HeaderWrapper = () => {
  const user = false

  return (
    <Header.Root>
      <Header.Nav>
        <Header.Logo />
        {user ? (
          <Header.Option href="/profile" variant="default">
            My Profile
            <CircleUser size={16} />
          </Header.Option>
        ) : (
          <>
            <Header.Option href="/auth/signup">Sign up</Header.Option>
            <Header.Option href="/auth/signin" variant="default">
              Sign in
              <CircleUser size={16} />
            </Header.Option>
          </>
        )}
      </Header.Nav>
    </Header.Root>
  )
}

export default HeaderWrapper
