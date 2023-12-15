import { StagesList } from '../../components'
import { useScreensContext } from '../../providers'

export const TemporalStages = () => {
  const { temporalStages, openStage } = useScreensContext()

  if (!temporalStages || temporalStages.stages.length === 0) return null

  const { stages, allowedStages } = temporalStages

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-center">
        Juega esto por tiempo limitado
      </h2>
      <StagesList
        allowedStages={allowedStages}
        openStage={openStage}
        stages={stages}
      />
    </div>
  )
}
