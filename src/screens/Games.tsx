import { ScreenContainer, StagesList } from '../components'
import { useScreensContext } from '../providers'

export const Games = () => {
  const { stages, openStage, allowedStages, currentEvent } = useScreensContext()

  if (!currentEvent) return null

  return (
    <ScreenContainer title={currentEvent.eventName} viewToGo={'home'}>
      <StagesList
        allowedStages={allowedStages}
        openStage={openStage}
        stages={stages}
      />
    </ScreenContainer>
  )
}
