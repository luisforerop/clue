import { useCallback, useEffect, useState } from 'react'
import { IStage } from '../shared/models'
import { appConfig } from '../shared/secrets'

const getAllowedStagesFromLocal = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem('allowedStages') ?? '[]')
  } catch (error) {
    console.error({ error })

    localStorage.removeItem('allowedStages')
    return []
  }
}

export const useGetStages = () => {
  const [stages, setStages] = useState<IStage[]>([])
  const [allowedStages, setAllowedStages] = useState<string[]>([])

  const addNewAllowedStage = useCallback(
    (stageId: string) => setAllowedStages((curr) => curr.concat(stageId)),
    [allowedStages]
  )

  useEffect(() => {
    const localStages = getAllowedStagesFromLocal()

    const updatedAllowedStages: string[] =
      localStages.length === 0 ? [appConfig.stages[0].id] : localStages

    setStages(appConfig.stages)
    setAllowedStages(updatedAllowedStages)
  }, [])

  useEffect(() => {
    if (allowedStages.length > 0) {
      localStorage.setItem('allowedStages', JSON.stringify(allowedStages))
    }
  }, [allowedStages])

  return {
    stages,
    setStages,
    allowedStages,
    addNewAllowedStage,
  }
}
