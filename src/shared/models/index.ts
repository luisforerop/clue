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

export type PossibleView = 'init' | 'home' | 'stage' | 'gallery'
export type PossibleUserLoggedState = 'none' | 'logged' | 'error'
export type PossibleStageType = 'add' | 'complete' | 'hangman'

export type IStage = IStageAddWords | IStageHangman | IStageCompleteStepByStep

export type StateType<StateValueType = any> = {
  set: React.Dispatch<React.SetStateAction<StateValueType>>
  value: StateValueType
}
