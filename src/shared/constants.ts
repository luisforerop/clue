import { PossibleView } from './models'

export const viewInfo: {
  [key in PossibleView]: {
    icon: string
    name: string
  }
} = {
  gallery: {
    icon: '🖼️',
    name: '🖼️ Galería',
  },
  games: {
    icon: '🎮',
    name: 'Juegos',
  },
  home: {
    icon: '🏠',
    name: 'Home',
  },
  init: {
    icon: 'Inicio',
    name: 'Inicio',
  },
  stage: {
    icon: 'Stage',
    name: 'Stage',
  },
}
