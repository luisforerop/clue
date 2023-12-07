import { IStage } from './models'

const stages: IStage[] = [
  {
    data: {
      words: [
        'bajo',
        'un',
        'manto',
        'en',
        'la',
        'a',
        'orillas',
        'del',
        'del',
        'viento',
      ],
    },
    name: 'La playa',
    type: 'add',
    isAllowed: true,
  },
  { data: { words: [] }, name: 'La noche', type: 'complete', isAllowed: false },
]

export const appConfig = {
  mainPassword: '0615',
  stages,
  gameTitle: 'Que empiece el juego',
}
