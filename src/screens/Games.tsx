import { StagesList } from '../components'
import { useScreensContext } from '../providers'

export const Games = () => {
  const { stages, openStage, allowedStages, currentEvent, goTo } =
    useScreensContext()

  if (!currentEvent) return null

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex gap-4">
        <button className="w-[40px] h-[40px] p-2" onClick={() => goTo('home')}>
          🏡
        </button>
        <h1 className="text-4xl font-semibold">{currentEvent.eventName}</h1>
      </div>
      <StagesList
        allowedStages={allowedStages}
        openStage={openStage}
        stages={stages}
      />
    </div>
  )
}
