export interface IStageBasic {
  name: string
  type: PossibleStageType
  data: any
  award?: AwardType
  nextClue?: string
  id: string
}

export interface IStageHangman extends IStageBasic {
  type: 'hangman'
  data: IHangmanData
}

export interface IStageAddWords extends IStageBasic {
  type: 'add'
  data: IAddWordsData
}

export interface IStageCompleteStepByStep extends IStageBasic {
  type: 'complete'
  data: ICompleteStepByStepData
}

export type AwardType = {
  image?: {
    src: string
  }
  text?: string
}

export interface IHangmanData {
  phrase: string
  tries?: number
}

export interface IAddWordsData {
  words: string[]
}

export type WordToCompleteType = {
  word: string
  type: 'complete' | 'show'
}

export interface ICompleteStepByStepData {
  words: WordToCompleteType[]
}

export type PossibleView = 'init' | 'home' | 'stage' | 'gallery' | 'games'
export type PossibleUserLoggedState = 'none' | 'logged' | 'error'
export type PossibleStageType = 'add' | 'complete' | 'hangman'

export type IStage = IStageAddWords | IStageHangman | IStageCompleteStepByStep

export type StateType<StateValueType = any> = {
  set: React.Dispatch<React.SetStateAction<StateValueType>>
  value: StateValueType
}

/* GAMES */

export type EventType = {
  stages: IStage[]
  allowedStages: string[]
  limitDate?: string | Date
  ad?: TemporalStagesAdType | null
  eventName: string
  id: string
}

/* TEMPORAL STAGES  */
export type TemporalStagesAdType = {
  title: string
  description: string
}

export type ITemporalStagesConfig = {
  stages: IStage[]
  limitDate: string | Date
  ad?: TemporalStagesAdType | null
  id: string
}

export interface ITemporalStagesState extends ITemporalStagesConfig {
  allowedStages: string[]
  nextTemporalStage: () => void
  limitDate: Date
}

/* GALLERY */

export type IGallery = {
  images: {
    src: string
  }[]
}
