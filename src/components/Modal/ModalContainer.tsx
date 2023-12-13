import { FC, PropsWithChildren, useEffect } from 'react'
import { ModalProps } from '.'

export const ModalContainer: FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
  selector,
}) => {
  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose?.()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', escapeListener)

    return () => {
      document.removeEventListener('keydown', escapeListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      id={`modal-container-${selector}`}
      onClick={(e) => {
        const { id } = e.target as HTMLDivElement
        if (id === `modal-container-${selector}`) {
          onClose?.()
        }
      }}
      className="absolute top-0 flex justify-center items-center w-full h-full p-10"
    >
      <div className="w-full h-full bg-blue-600 p-8 rounded relative flex flex-col justify-center">
        <div className="absolute right-4 top-4">
          <button className="bg-transparent p-0" onClick={() => onClose?.()}>
            ✖️
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
