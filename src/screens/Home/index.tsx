import { useScreensContext } from '../../providers'

export const Home = () => {
  const { stages, openStage, allowedStages } = useScreensContext()

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl font-semibold">Es tiempo de jugar</h1>
      <ul className="flex flex-col gap-4 ">
        {stages.map(({ name, id }, intexStage) => (
          <li
            key={intexStage}
            className="w-full"
            style={{ opacity: allowedStages.includes(id) ? '1' : '0.5' }}
          >
            <button
              className="w-full"
              disabled={!allowedStages.includes(id)}
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
