import { ComponentProps, ReactNode } from 'react'
import { Button, ButtonProps } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Root = ({ className, ...props }: ComponentProps<'header'>) => {
  return (
    <header
      className={cn(className, 'flex items-center justify-between')}
      {...props}
    />
  )
}

const Title = (props: ComponentProps<'h1'>) => {
  return <h1 {...props} />
}

const Nav = ({ className, ...props }: ComponentProps<'nav'>) => {
  return <nav className={cn(className, 'flex items-center gap-2')} {...props} />
}

const Option = ({
  active = false,
  className,
  children,
  ...props
}: {
  active?: boolean
} & ButtonProps) => {
  return (
    <Button
      className={cn(className, 'transition')}
      variant={active ? 'default' : 'secondary'}
      {...props}
    >
      {children}
    </Button>
  )
}

const Label = ({ className, ...props }: ComponentProps<'span'>) => {
  return <span className={cn(className, 'sm:hidden')} {...props} />
}

const component = {
  Root,
  Option,
  Title,
  Nav,
  Label,
}

export default component
