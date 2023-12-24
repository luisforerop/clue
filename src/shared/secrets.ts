import { EventType, IStage, ITemporalStagesConfig } from './models'

const stages: IStage[] = [
  {
    id: '01',
    name: '🌘 La noche',
    type: 'add',
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
    data: {
      words: [
        { word: 'Somos como', type: 'complete' },
        { word: 'la marea', type: 'show' },
        { word: 'que llega y', type: 'complete' },
        { word: 'se retira sin cesar,', type: 'show' },
        { word: 'Fluyendo', type: 'complete' },
        { word: 'a pesar de la distancia', type: 'show' },
        { word: 'en cada latido', type: 'complete' },
        { word: 'en cada lugar.', type: 'complete' },
        { word: 'Tus ojos', type: 'complete' },
        { word: ',', type: 'show' },
        { word: 'dos luceros', type: 'complete' },
        { word: 'que guían', type: 'show' },
        { word: 'mi camino', type: 'complete' },
        { word: 'en la oscuridad', type: 'show' },
        { word: 'Eres la razón', type: 'complete' },
        { word: 'de estos versos,', type: 'show' },
        { word: 'mi musa', type: 'complete' },
        { word: ',', type: 'show' },
        { word: 'mi preciada realidad.', type: 'complete' },
      ],
    },
  },
  {
    id: '04',
    name: '🏞️ El horizonte',
    type: 'complete',
    data: { words: [] },
  },
  {
    id: '05',
    name: '🌞 La día',
    type: 'complete',
    data: { words: [] },
  },
  {
    id: '06',
    name: '💙 Lo nuestro',
    type: 'complete',
    data: { words: [] },
  },
]

const sixthMonthStages: IStage[] = [
  {
    id: '151223-01',
    name: '👩‍❤️‍👨 Nosotros',
    type: 'add',
    award: {
      text: `Hoy, aunque el día está oscuro, tú brillas con tu luz.\n\nAunque el sol no sale, tú, mi sol, calienta mi día.\n\nY se qué aunque tenemos mucho por crecer, lo más lindo es pensar en que caminando juntos este camino hasta donde pondamos, llegaremos a esta playa, convertidos en la versión de nosotros mismos por la que tanto habremos trabajado, juntos.`,
      image: {
        src: 'https://res.cloudinary.com/dzufcfibp/image/upload/v1702669954/clue/felipe/bgeums8dditroiy8qdn6.png',
      },
    },
    data: {
      words: ['copito', 'lindurita'],
    },
  },
]

const chrismasStages: IStage[] = [
  {
    id: '251223-01',
    name: '👩‍❤️‍👨 Tu regalito',
    type: 'complete',
    award: {
      text: `Mor, hace un tiempo me dijiste que cuando eras pequeña querías una caja registradora de navidad, pero que no había sido posible.\n\nHoy, durante la primera navidad que pasamos juntos, he decidido hacerte este regalo.\n\nQuería comprarte una caja registradora y enviártela, sin embargo, creí que hacerla sería más especial. Estuve mirando algunas cositas de IoT para ver si podía conectar un dispositivo físico con algo virtual pero no alcancé a descifrar todo, y el proceso de fabricación se me complicó un tris.\n\nAsí que decidí crearte esta simulación de caja registradora. Quizás podamos agregarle algo para crear un jueguito para hacerlo juntos, o agregar más productos. Por ahora espero que la disfrutes mucho.\n\nTu regalo:\n\n[Haz clic >>> 🎁](https://luisforerop.github.io/cash-register/)`,
    },
    data: {
      words: [
        { type: 'show', word: 'Caja' },
        { type: 'complete', word: 'registradora' },
      ],
    },
  },
]

const temporalStages: ITemporalStagesConfig = {
  limitDate: '',
  stages: sixthMonthStages,
  id: '151223',
}

const events: EventType[] = [
  {
    id: '01',
    allowedStages: ['01', '02', '03'],
    eventName: '👩‍❤️‍👨 Nosotros en el 2023',
    stages: stages,
    limitDate: '',
  },
  {
    id: '02-months',
    allowedStages: ['151223-01'],
    eventName: '💫 Feliz sexto mes',
    stages: sixthMonthStages,
    limitDate: '',
  },
  {
    id: '03-chrismas',
    allowedStages: ['251223-01'],
    eventName: '🎄 Feliz navidad',
    stages: chrismasStages,
    limitDate: '',
  },
]

export const appConfig = {
  mainPassword: '0615',
  stages,
  gameTitle: 'Que empiece el juego',
  temporalStages,
  events,
}
