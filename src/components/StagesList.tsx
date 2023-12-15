import { FC } from 'react'
import { IStage } from '../shared/models'

type StagesListProps = {
  stages: IStage[]
  allowedStages: string[]
  openStage: (stage: IStage) => void
}

export const StagesList: FC<StagesListProps> = ({
  stages,
  allowedStages,
  openStage,
}) => {
  return (
    <ul className="flex flex-col gap-4 ">
      {stages.map((stage) => {
        const { name, id } = stage
        return (
          <li
            key={id}
            className="w-full"
            style={{ opacity: allowedStages.includes(id) ? '1' : '0.5' }}
          >
            <button
              className="w-full"
              disabled={!allowedStages.includes(id)}
              onClick={() => openStage(stage)}
            >
              {name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
