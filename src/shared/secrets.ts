import { IStage } from './models'

const stages: IStage[] = [
  {
    id: '01',
    name: '🌘 La noche',
    type: 'add',
    isAllowed: true,
    data: {
      words: [
        'bajo',
        'un manto',
        'en',
        'la',
        'a orillas del',
        'del viento',
        'te quiero',
        'como la',
        'nuestra',
        'con tu luz',
        'mi copito',
        'vida',
        'eres la',
      ],
    },
  },
  {
    id: '02',
    name: '🏖️ La playa',
    type: 'complete',
    isAllowed: false,
    data: { words: [] },
  },
  {
    id: '03',
    name: '🌊 El mar',
    type: 'complete',
    isAllowed: false,
    data: { words: [] },
  },
  {
    id: '04',
    name: '🏞️ El horizonte',
    type: 'complete',
    isAllowed: false,
    data: { words: [] },
  },
  {
    id: '05',
    name: '🌞 La día',
    type: 'complete',
    isAllowed: false,
    data: { words: [] },
  },
  {
    id: '06',
    name: '💙 Lo nuestro',
    type: 'complete',
    isAllowed: false,
    data: { words: [] },
  },
]

export const appConfig = {
  mainPassword: '0615',
  stages,
  gameTitle: 'Que empiece el juego',
}
