import { useCallback, useRef } from 'react'

export const useDebounce = () => {
  const timeout = useRef<NodeJS.Timeout>(null)

  return useCallback((callback: () => void, delay = 500) => {
    if (timeout.current) clearTimeout(timeout.current)
    const newTimer = setTimeout(() => {
      callback()
    }, delay)
    timeout.current = newTimer
  }, [])
}
