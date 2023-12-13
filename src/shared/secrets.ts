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
        src: 'https://res.cloudinary.com/dzufcfibp/image/upload/v1702499257/clue/felipe/plu7mardlychf4hjv1zs.png',
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
    type: 'add',
    isAllowed: false,
    data: {
      words: [
        'En cada grano de arena',
        'Que abraza la orilla',
        'Mi vida',
        'Mi chispa tranquila',
        'Hasta el amanecer',
        'Sin cesar',
        'Atesoro instantes',
      ],
    },
    award: {
      text: `En cada grano de arena, en cada ola que abraza la orilla,\n\nEncuentro reflejos de ti, mi vida, mi chispa tranquila.\n\nLas noches que hablamos hasta el amanecer, sin cesar,\n\nSon momentos que atesoro, instantes que no olvidaré jamás.`,
      image: {
        src: 'https://res.cloudinary.com/dzufcfibp/image/upload/v1702499580/clue/felipe/jatq08whx4imfo6g8kio.png',
      },
    },
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
