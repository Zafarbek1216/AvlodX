import { useState } from 'react'

export function useDisclosure(initial = false) {
  const [opened, setOpened] = useState(initial)

  const open = () => setOpened(true)
  const close = () => setOpened(false)
  const toggle = () => setOpened((value) => !value)

  return { opened, open, close, toggle, setOpened }
}
