import { FC } from 'react'
import { useScreensContext } from '../providers'
import { Modal } from './Modal'
import Markdown from 'react-markdown'

type AwardModalProps = {
  isOpen: boolean
  onClose?: () => void
}

export const AwardModal: FC<AwardModalProps> = (props) => {
  const { currentStage } = useScreensContext()

  if (!currentStage?.award) return null

  return (
    <Modal selector="#award-modal" {...props}>
      <div className="flex flex-col gap-2 h-full overflow-auto">
        <h3 className="text-2xl font-semibold text-center">Tu premio</h3>
        <img src={currentStage.award.image?.src} alt="" className="rounded" />
        <div className="flex flex-col gap-1">
          <Markdown>{currentStage?.award?.text}</Markdown>
        </div>
      </div>
    </Modal>
  )
}
