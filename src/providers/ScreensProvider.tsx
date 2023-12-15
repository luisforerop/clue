import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { IStage, PossibleUserLoggedState, PossibleView } from '../shared/models'
import { appConfig } from '../shared/secrets'
import { useGetStages } from '../hooks/useGetStages'

export interface ScreensContextType {
  currentStageIndex: number
  currentStage: IStage | null
  stages: IStage[]
  userLogged: PossibleUserLoggedState
  currentView: PossibleView
  password: string
  gameTitle: string
  login: (typedPassword: string) => void
  next: () => void
  openStage: (stageIndex: number) => void
  goTo: (viewToGo: PossibleView) => void
  allowedStages: string[]
}

const ScreensContext = createContext({} as ScreensContextType)

export const useScreensContext = () => useContext(ScreensContext)

export const ScreensProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = ScreensContext

  const { stages, addNewAllowedStage, allowedStages } = useGetStages()

  const [userLogged, setUserLogged] = useState<PossibleUserLoggedState>('none')
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [currentView, setCurrentView] = useState<PossibleView>('init')
  const [password, setPassword] = useState('1234')
  const [gameTitle, setGameTitle] = useState('')
  const [currentStage, setCurrentStage] = useState<IStage | null>(null)

  const login = (typedPassword: string) => {
    if (typedPassword === password) {
      setUserLogged('logged')
      localStorage.setItem('userIsLogged', 'true')
      setCurrentView('home')
    } else {
      setUserLogged('error')
    }
  }

  const next = () => {
    if (!currentStage) return

    setCurrentView('home')
    addNewAllowedStage(stages[currentStageIndex + 1].id)
    setCurrentStageIndex((curr) => curr + 1)
  }

  const openStage = (stageIndex: number) => {
    const currentStage = stages[stageIndex]
    if (allowedStages.includes(currentStage.id)) {
      setCurrentView(() => {
        setCurrentStageIndex(stageIndex)
        setCurrentStage(currentStage)
        return 'stage'
      })
    }
  }

  const goTo = (possibleView: PossibleView) => setCurrentView(possibleView)

  useEffect(() => {
    const { mainPassword, gameTitle } = appConfig
    const userIsLogged = !!localStorage.getItem('userIsLogged')

    if (userIsLogged) {
      setUserLogged('logged')
      setCurrentView('home')
    }
    setPassword(mainPassword)
    setGameTitle(gameTitle)
  }, [])

  const context: ScreensContextType = {
    stages,
    currentStageIndex,
    userLogged,
    currentView,
    password,
    gameTitle,
    login,
    next,
    openStage,
    goTo,
    currentStage,
    allowedStages,
  }

  return <Provider value={context}>{children}</Provider>
}
