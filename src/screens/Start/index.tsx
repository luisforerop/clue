import { Password } from '../../components'
import { useScreensContext } from '../../providers/ScreensProvider'

export const Start = () => {
  const { gameTitle } = useScreensContext()
  return (
    <div className="flex flex-col justify-between gap-5 items-center">
      <h1>{gameTitle}</h1>
      <Password />
    </div>
  )
}
