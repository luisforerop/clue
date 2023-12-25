import Markdown from 'react-markdown'
import { EmptyMessage, ScreenContainer } from '../components'
import { useScreensContext } from '../providers'
import { viewInfo } from '../shared/constants'

const GalleryList = () => {
  const { gallery } = useScreensContext()

  if (gallery.length === 0)
    return (
      <EmptyMessage message="Aún no tienes premios. Juega algún nivel y gana recompensas" />
    )

  return (
    <div className="flex flex-col gap-2">
      {gallery.map((award) => (
        <div className="flex flex-col gap-2 rounded overflow-hidden">
          <img src={award.image?.src ?? ''} alt="" />
          <div className="p-2">
            <Markdown>{award.text}</Markdown>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Gallery = () => {
  return (
    <ScreenContainer title={viewInfo.gallery.name} viewToGo={'home'}>
      <GalleryList />
    </ScreenContainer>
  )
}
