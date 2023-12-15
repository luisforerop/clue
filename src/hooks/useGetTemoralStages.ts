import { useEffect, useState } from 'react'
import { ITemporalStagesConfig, ITemporalStagesState } from '../shared/models'
import { appConfig } from '../shared/secrets'

interface ITemporalStagesConfigState extends ITemporalStagesConfig {
  limitDate: Date
}

const getAllowedTemporalStages = (temporalStagesId: string): string[] => {
  try {
    return JSON.parse(
      localStorage.getItem(`${temporalStagesId}-allowedStages`) ?? '[]'
    )
  } catch (error) {
    console.error({ error })

    localStorage.removeItem('allowedStages')
    return []
  }
}

export const useGetTemoralStages = (): ITemporalStagesState => {
  const [allowedStages, setAllowedStages] = useState<string[]>([])
  const [stateData, setStateData] = useState<ITemporalStagesConfigState>(
    appConfig.temporalStages as ITemporalStagesConfigState
  )

  const nextTemporalStage = () => {}

  useEffect(() => {
    // remover local si se acabó
  }, [])

  useEffect(() => {
    if (
      !appConfig.temporalStages ||
      appConfig?.temporalStages?.stages?.length === 0
    ) {
      return
    }

    const { limitDate: localLimitDate, id } = appConfig.temporalStages
    const localAllowedTemporalStages = getAllowedTemporalStages(id)
    const updatedAllowedTemporalStages =
      localAllowedTemporalStages.length === 0
        ? [appConfig.temporalStages.stages[0]?.id ?? '']
        : localAllowedTemporalStages

    setAllowedStages(updatedAllowedTemporalStages)
    setStateData(() => ({
      ...appConfig.temporalStages,
      limitDate: new Date(localLimitDate),
    }))
  }, [])

  return {
    ...stateData,
    allowedStages,
    nextTemporalStage,
  }
}
