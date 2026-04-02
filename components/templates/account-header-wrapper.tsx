'use client'

import { LayoutDashboard, LogOut, Newspaper, Upload } from 'lucide-react'
import { ComponentProps } from 'react'
import AccountHeader from '@/components/molecules/account-header'
import { usePathname } from 'next/navigation'
import { useUserStore } from '@/store/user-provider'
import Link from 'next/link'
import { signOut } from '@/actions/signout'

const { Root, Nav, Title, Option, Label } = AccountHeader

const getAccountHeaderTitle = (pathname: string): string => {
  switch (pathname) {
    case '/account/dashboard':
      return 'Dashboard'
    case '/account/upload':
      return 'Upload your picture'
    default:
      return 'My Account'
  }
}

export const AccountHeaderWrapper = (props: ComponentProps<'header'>) => {
  const pathname = usePathname()
  const { setUser } = useUserStore()

  const handleLogout = async () => {
    setUser(null)
    await signOut()
  }

  return (
    <Root {...props}>
      <Title>{getAccountHeaderTitle(pathname)}</Title>

      <Nav className="flex items-center gap-2">
        <Option id="account" active={pathname === '/account'} asChild>
          <Link href="/account">
            <Newspaper />
            <Label>My Account</Label>
          </Link>
        </Option>

        <Option
          id="dashboard"
          active={pathname === '/account/dashboard'}
          asChild
        >
          <Link href="/account/dashboard">
            <LayoutDashboard />
            <Label>Dashboard</Label>
          </Link>
        </Option>

        <Option id="upload" active={pathname === '/account/upload'} asChild>
          <Link href="/account/upload">
            <Upload />
            <Label>Upload</Label>
          </Link>
        </Option>

        <Option id="signout" onClick={handleLogout}>
          <LogOut />
          <Label>Sign ou</Label>
        </Option>
      </Nav>
    </Root>
  )
}

export default AccountHeaderWrapper
