import { FC } from 'react'
import { useScreensContext } from '../../providers'

export type GameHeaderProps = {
  total: number
  currentProgress: number
  title: string
}

export const GameHeader: FC<GameHeaderProps> = ({
  currentProgress,
  title,
  total,
}) => {
  const { goTo } = useScreensContext()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between items-center">
        <button onClick={() => goTo('home')}>🏡</button>
        <div>{`${currentProgress}/${total}`}</div>
        <div>❕</div>
      </div>
      <h1 className="w-full text-center">{title}</h1>
    </div>
  )
}
