import { FC, useMemo } from 'react'
import { EmptyMessage } from '../../../components'
import { useScreensContext } from '../../../providers'
import {
  IStageCompleteStepByStep,
  WordToCompleteType,
} from '../../../shared/models'

type WordsCompletedProps = {
  wordsCompleted: string[]
}

const getColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${'0'.repeat(6 - color.length)}${color}`
}

export const WordsCompleted: FC<WordsCompletedProps> = ({ wordsCompleted }) => {
  const currentStage = useScreensContext()
    .currentStage as IStageCompleteStepByStep

  const wordsToShow = useMemo(() => {
    if (currentStage?.type !== 'complete') return []
    const { words } = currentStage.data

    let wordsUnlocked: WordToCompleteType[] = []

    for (const wordData of words) {
      if (wordData.type === 'show') {
        wordsUnlocked = wordsUnlocked.concat(wordData)
        continue
      }

      if (wordsCompleted.includes(wordData.word.toLowerCase())) {
        wordsUnlocked = wordsUnlocked.concat(wordData)
        continue
      }

      break
    }

    return wordsUnlocked
  }, [currentStage?.data?.words, wordsCompleted])

  if (wordsCompleted.length === 0) {
    return <EmptyMessage />
  }

  return (
    <ul>
      {wordsToShow.map(({ word, type }) => (
        <li
          className="inline-flex m-1 p-1 rounded"
          key={word}
          style={
            type !== 'complete'
              ? { backgroundColor: '#3b3b3b' }
              : { backgroundColor: getColor() }
          }
        >
          {word}
        </li>
      ))}
    </ul>
  )
}
