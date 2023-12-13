import { IStage } from './models'

const stages: IStage[] = [
  {
    id: '01',
    name: '🌘 La noche',
    type: 'add',
    isAllowed: true,
    award: {
      text: `Bajo un manto de estrellas en la playa a orillas del mar\n\nsusurros del viento y las olas, te quiero expresar.\n\nComo la luna que ilumina la noche con su luz plateada,\n\nTú, mi amor, en mi vida, eres la luz más sosegada`,
      image: {
        src: 'https://res.cloudinary.com/dzufcfibp/image/upload/v1702440857/clue/felipe/x2igxrsffft9glcyyrxe.png',
      },
    },
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
