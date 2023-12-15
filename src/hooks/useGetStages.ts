import { useEffect, useState } from 'react'
import { IStage } from '../shared/models'
import { appConfig } from '../shared/secrets'

const getStagesFromLocal = (): IStage[] => {
  try {
    return JSON.parse(localStorage.getItem('stages') ?? '[]')
  } catch (error) {
    console.error({ error })

    localStorage.removeItem('stages')
    return []
  }
}

export const useGetStages = () => {
  const [stages, setStages] = useState<IStage[]>([])

  useEffect(() => {
    const localStages = getStagesFromLocal()
    const updatedStages: IStage[] =
      localStages?.length === 0 ? appConfig.stages : localStages

    setStages(updatedStages)
  }, [])

  useEffect(() => {
    console.log({ stages })

    if (stages.length > 0) {
      localStorage.setItem('stages', JSON.stringify(stages))
    }
  }, [stages])

  return {
    stages,
    setStages,
  }
}
