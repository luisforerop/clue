import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import {
  AwardModal,
  FormInput,
  FormInputProps,
  FullWindowContainer,
  GameHeader,
  GameHeaderProps,
  WinComponent,
} from '.'
import { useScreensContext } from '../providers'

interface GameLayoutProps extends GameHeaderProps, FormInputProps {}

export const GameLayout: FC<PropsWithChildren<GameLayoutProps>> = ({
  children,
  addWord,
  currentProgress,
  title,
  total,
}) => {
  const { newAward, currentStage } = useScreensContext()

  const [openModal, setOpenModal] = useState(false)
  const levelCompleted = useMemo(
    () => total === currentProgress,
    [total, currentProgress]
  )

  useEffect(() => {
    if (levelCompleted) {
      setOpenModal(levelCompleted)
      currentStage?.award && newAward(currentStage.award)
    }
  }, [levelCompleted])

  return (
    <FullWindowContainer>
      <GameHeader
        currentProgress={currentProgress}
        total={total}
        title={title}
      />
      <div className="flex-1">{children}</div>
      {levelCompleted ? <WinComponent /> : <FormInput addWord={addWord} />}
      <AwardModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </FullWindowContainer>
  )
}
