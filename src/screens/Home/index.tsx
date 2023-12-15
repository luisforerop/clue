import { StagesList } from '../../components'
import { useScreensContext } from '../../providers'
import { TemporalStages } from './TemporalStages'

export const Home = () => {
  const { stages, openStage, allowedStages } = useScreensContext()

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl font-semibold">Es tiempo de jugar</h1>
      <TemporalStages />
      <StagesList
        allowedStages={allowedStages}
        openStage={openStage}
        stages={stages}
      />
    </div>
  )
}
