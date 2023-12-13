import type { FC, PropsWithChildren } from 'react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalContainer } from './ModalContainer'

export type ModalProps = {
  selector: string
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { children, selector, isOpen } = props
  const container = useRef<Element | null>(null)

  useEffect(() => {
    container.current = document.querySelector(selector)
  }, [selector])

  return container.current && isOpen
    ? createPortal(
        <ModalContainer {...props}>{children}</ModalContainer>,
        container.current
      )
    : null
}
