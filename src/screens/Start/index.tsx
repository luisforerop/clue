import { Password } from '../../components'
import { useScreensContext } from '../../providers/ScreensProvider'

export const Start = () => {
  const { gameTitle } = useScreensContext()
  return (
    <div className="flex flex-col justify-center gap-5 items-center h-full">
      <h1 className="text-center">{gameTitle}</h1>
      <Password />
    </div>
  )
}
