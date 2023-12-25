import { FC } from 'react'

type EmptyMessageProps = {
  message?: string
}

export const EmptyMessage: FC<EmptyMessageProps> = ({
  message = 'Aún no has agregado palabras',
}) => <p>{message}</p>
