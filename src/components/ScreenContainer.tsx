import { FC, PropsWithChildren } from 'react'
import { PossibleView } from '../shared/models'
import { useScreensContext } from '../providers'
import { viewInfo } from '../shared/constants'

type ScreenContainerProps = {
  title: string
  viewToGo?: PossibleView
}

export const ScreenContainer: FC<PropsWithChildren<ScreenContainerProps>> = ({
  children,
  title,
  viewToGo,
}) => {
  const { goTo } = useScreensContext()
  return (
    <div className="flex flex-col gap-8 p-8">
      <header className="flex gap-4">
        {viewToGo && (
          <nav>
            <button onClick={() => goTo(viewToGo)}>
              {viewInfo[viewToGo].icon}
            </button>
          </nav>
        )}
        <h1 className="text-4xl font-semibold">{title}</h1>
      </header>
      {children}
    </div>
  )
}
