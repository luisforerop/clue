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

interface GameLayoutProps extends GameHeaderProps, FormInputProps {}

export const GameLayout: FC<PropsWithChildren<GameLayoutProps>> = ({
  children,
  addWord,
  currentProgress,
  title,
  total,
}) => {
  const levelCompleted = useMemo(
    () => total === currentProgress,
    [total, currentProgress]
  )
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (levelCompleted) {
      setOpenModal(levelCompleted)
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
