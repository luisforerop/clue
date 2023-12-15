import { AddWords, CompleteStepByStep, HangmanGame, Home, Start } from '.'
import { useScreensContext } from '../providers'
import { PossibleStageType } from '../shared/models'

const Stages: { [key in PossibleStageType]: () => JSX.Element | null } = {
  complete: CompleteStepByStep,
  add: AddWords,
  hangman: HangmanGame,
}

export const ScreenManager = () => {
  const { userLogged, currentView, currentStage } = useScreensContext()

  if (userLogged !== 'logged') return <Start />

  if (currentView === 'home') return <Home />

  if (!currentStage) return null

  const Stage = Stages[currentStage.type]

  return <Stage />
}
