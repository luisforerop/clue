import { useScreensContext } from '../../providers'

export const Home = () => {
  const { stages, openStage } = useScreensContext()

  return (
    <div className="flex flex-col gap-2">
      {stages.map(({ name, isAllowed }, intexStage) => (
        <button
          key={intexStage}
          disabled={!isAllowed}
          onClick={() => openStage(intexStage)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
