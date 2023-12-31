import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { useGallery, useGetStages, useGetTemoralStages } from '../hooks'
import {
  AwardType,
  EventType,
  IStage,
  ITemporalStagesState,
  PossibleUserLoggedState,
  PossibleView,
} from '../shared/models'
import { appConfig } from '../shared/secrets'

type PossibleCurrentStageType = 'full' | 'temporal' | 'none'

export interface ScreensContextType {
  currentStage: IStage | null
  stages: IStage[]
  allowedStages: string[]

  next: () => void
  openStage: (stage: IStage) => void
  currentStageType: PossibleCurrentStageType

  events: EventType[]
  setCurrentEvent: (event: EventType) => void // carga cs s as
  currentEvent: EventType | null

  userLogged: PossibleUserLoggedState
  currentView: PossibleView
  password: string
  gameTitle: string
  login: (typedPassword: string) => void
  goTo: (viewToGo: PossibleView) => void
  temporalStages: ITemporalStagesState

  gallery: AwardType[]
  newAward: (award: AwardType) => void
}

const ScreensContext = createContext({} as ScreensContextType)

export const useScreensContext = () => useContext(ScreensContext)

export const ScreensProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = ScreensContext

  const temporalStages = useGetTemoralStages()

  const [userLogged, setUserLogged] = useState<PossibleUserLoggedState>('none')
  const [currentView, setCurrentView] = useState<PossibleView>('init')
  const [password, setPassword] = useState('1234')
  const [gameTitle, setGameTitle] = useState('')
  const [currentStage, setCurrentStage] = useState<IStage | null>(null)
  const [currentStageType] = useState<PossibleCurrentStageType>('full')
  const [events] = useState<EventType[]>(appConfig.events)
  const [currentEvent, setCurrentEventState] = useState<EventType | null>(null)

  const { stages, addNewAllowedStage, allowedStages } =
    useGetStages(currentEvent)
  const { gallery, newAward } = useGallery()

  const setCurrentEvent = (event: EventType) => {
    setCurrentEventState(event)
    setCurrentView('games')
  }

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
    //
    if (!currentStage) return

    const currentStageIndex = stages.findIndex(
      ({ id }) => currentStage.id === id
    )

    setCurrentView('home')

    if (currentStageIndex === -1) return
    addNewAllowedStage(stages[currentStageIndex + 1].id)
  }

  const openStage = (currentStage: IStage) => {
    const stageAllowed =
      allowedStages.includes(currentStage.id) ||
      temporalStages.allowedStages.includes(currentStage.id)

    if (stageAllowed) {
      setCurrentView(() => {
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

  useEffect(() => {}, [gallery])

  const context: ScreensContextType = {
    stages,
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
    temporalStages,
    currentStageType,

    events,
    setCurrentEvent,
    currentEvent,

    gallery,
    newAward,
  }

  return <Provider value={context}>{children}</Provider>
}
