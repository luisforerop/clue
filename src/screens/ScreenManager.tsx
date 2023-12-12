import { AddWords, CompleteStepByStep, HangmanGame, Home, Start } from '.'
import { useScreensContext } from '../providers'
import { PossibleStageType } from '../shared/models'

const Stages: { [key in PossibleStageType]: () => JSX.Element | null } = {
  complete: CompleteStepByStep,
  add: AddWords,
  hangman: HangmanGame,
}

export const ScreenManager = () => {
  const { userLogged, currentView, currentStageIndex, stages } =
    useScreensContext()

  if (userLogged !== 'logged') return <Start />

  if (currentView === 'home') return <Home />

  const Stage = Stages[stages[currentStageIndex].type]

  return <Stage />
}
