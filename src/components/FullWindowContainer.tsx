import { FC, PropsWithChildren } from 'react'

export const FullWindowContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 gap-8">
      {children}
    </div>
  )
}
