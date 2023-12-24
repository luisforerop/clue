import { useScreensContext } from '../../providers'

export const Home = () => {
  const { events, setCurrentEvent } = useScreensContext()

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl font-semibold">Es tiempo de jugar</h1>
      <div className="flex flex-col gap-2">
        {events.map((event) => (
          <button key={event.id} onClick={() => setCurrentEvent(event)}>
            {event.eventName}
          </button>
        ))}
      </div>
    </div>
  )
}
