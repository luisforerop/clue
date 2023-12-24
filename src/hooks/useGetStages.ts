import { useEffect, useState } from 'react'
import { EventType, IStage } from '../shared/models'
import { appConfig } from '../shared/secrets'

const getAllowedStagesFromLocal = (stageId: string): string[] => {
  try {
    return JSON.parse(localStorage.getItem(`allowedStages-${stageId}`) ?? '[]')
  } catch (error) {
    console.error({ error })

    localStorage.removeItem(`allowedStages-${stageId}`)
    return []
  }
}

export const useGetStages = (currentEvent: EventType | null) => {
  const [stages, setStages] = useState<IStage[]>([])
  const [allowedStages, setAllowedStages] = useState<string[]>([])

  const addNewAllowedStage = (stageId: string) => {
    setAllowedStages((curr) => curr.concat(stageId))
  }

  useEffect(() => {
    if (!currentEvent) return
    const { stages, allowedStages, id } = currentEvent
    const localStages = getAllowedStagesFromLocal(id)
    const updatedAllowedStages: string[] = [...localStages, ...allowedStages]

    setStages(stages)
    setAllowedStages(updatedAllowedStages)
  }, [currentEvent])

  useEffect(() => {
    if (!currentEvent) return

    const localStages = getAllowedStagesFromLocal(currentEvent.id)

    const updatedAllowedStages: string[] =
      localStages.length === 0 ? [appConfig.stages[0].id] : localStages

    setStages(appConfig.stages)
    setAllowedStages(updatedAllowedStages)
  }, [])

  useEffect(() => {
    if (!currentEvent) return

    if (allowedStages.length > 0) {
      localStorage.setItem(
        `allowedStages-${currentEvent.id}`,
        JSON.stringify(allowedStages)
      )
    }
  }, [allowedStages])

  return {
    stages,
    setStages,
    allowedStages,
    addNewAllowedStage,
  }
}
