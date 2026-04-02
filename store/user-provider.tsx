'use client'

import { User } from '@/types/user'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

type UserContextProps = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextProps | null>(null)

type UserProviderProps = {
  children: ReactNode
  user: User | null
}

export const UserProvider = ({ children, ...props }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(props.user)

  const value = useMemo<UserContextProps>(
    () => ({ user, setUser }),
    [user, setUser]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserStore = () => {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useContext should be inside his Provider')
  }
  return context
}
