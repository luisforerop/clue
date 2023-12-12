import { useScreensContext } from '../../providers'

export const Home = () => {
  const { stages, openStage } = useScreensContext()

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl font-semibold">Es tiempo de jugar</h1>
      <ul className="flex flex-col gap-4 ">
        {stages.map(({ name, isAllowed }, intexStage) => (
          <li
            key={intexStage}
            className="w-full"
            style={{ opacity: isAllowed ? '1' : '0.5' }}
          >
            <button
              className="w-full"
              disabled={!isAllowed}
              onClick={() => openStage(intexStage)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
