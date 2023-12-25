import { ScreenContainer } from '../../components'
import { useScreensContext } from '../../providers'
import { viewInfo } from '../../shared/constants'

export const Home = () => {
  const { events, setCurrentEvent, goTo, gameTitle } = useScreensContext()

  return (
    <ScreenContainer title={gameTitle}>
      <div className="flex flex-col gap-2">
        {events.map((event) => (
          <button key={event.id} onClick={() => setCurrentEvent(event)}>
            {event.eventName}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => goTo('gallery')}>{viewInfo.gallery.name}</button>
      </div>
    </ScreenContainer>
  )
}
