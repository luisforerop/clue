import {
  AddWords,
  CompleteStepByStep,
  Gallery,
  Games,
  HangmanGame,
  Home,
  Start,
} from '.'
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

  if (currentView === 'games') return <Games />

  if (currentView === 'home') return <Home />

  if (currentView === 'gallery') return <Gallery />

  if (!currentStage) return null

  const Stage = Stages[currentStage.type]

  return <Stage />
}
