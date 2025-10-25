import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { Button, ButtonProps } from '../ui/button'

const Logo = ({
  href = '/',
  className,
  ...props
}: Replace<
  Omit<LinkProps & ComponentProps<'a'>, 'children'>,
  { href?: string }
>) => {
  return (
    <Link
      href={href}
      className={cn(
        className,
        'me-auto transition-colors hover:text-(--background-primary)'
      )}
      {...props}
    >
      <Image
        src="/assets/dogs.svg"
        alt="Dogs Logo"
        width={28}
        height={22}
        priority
      />
    </Link>
  )
}

const Option = ({
  className,
  variant = 'secondary',
  ...props
}: LinkProps & ComponentProps<'a'> & Pick<ButtonProps, 'variant'>) => {
  return (
    <Button asChild variant={variant}>
      <Link className={cn(className, 'flex items-center gap-2')} {...props} />
    </Button>
  )
}

const Nav = ({ className, ...props }: ComponentProps<'nav'>) => {
  return (
    <nav
      className={cn(
        className,
        'container flex h-(--header-height) items-center gap-4'
      )}
      {...props}
    />
  )
}

const Header = ({ className, ...props }: ComponentProps<'header'>) => {
  return <header className={cn(className, 'shadow-sm')} {...props} />
}

const component = {
  Root: Header,
  Nav,
  Logo,
  Option,
}

export default component
