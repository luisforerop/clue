import { useEffect, useMemo, useState } from 'react'
import { GameLayout } from '../../components'
import { useScreensContext } from '../../providers'
import { WordsCompleted } from './components'

export const CompleteStepByStep = () => {
  const { currentStage } = useScreensContext()

  const [wordsCompleted, setWordsCompleted] = useState<string[]>([])

  const listId = useMemo(() => `${currentStage?.id}-list`, [currentStage])
  const listOfWordsToComplete = useMemo(() => {
    if (currentStage?.type !== 'complete') return []

    return currentStage.data.words
      .filter(({ type }) => type === 'complete')
      .map(({ word }) => word)
  }, [currentStage?.data])

  const unlockWord = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const { children } = evt.target as HTMLFormElement
    const input = children[0] as HTMLInputElement
    const word = input.value.toLowerCase()

    const indexToCheck = wordsCompleted.length

    if (listOfWordsToComplete[indexToCheck].toLowerCase() === word) {
      setWordsCompleted((curr) => {
        const updatedWordList = curr.concat(word)
        localStorage.setItem(listId, JSON.stringify(updatedWordList))
        return updatedWordList
      })
    }

    input.value = ''
  }

  useEffect(() => {
    if (!currentStage) return

    const listOfWordsSaved = localStorage.getItem(listId)

    if (!listOfWordsSaved) return

    try {
      const formattedList = JSON.parse(listOfWordsSaved)
      setWordsCompleted(formattedList)
    } catch (error) {}
  }, [])

  return (
    <GameLayout
      currentProgress={wordsCompleted.length}
      total={listOfWordsToComplete.length}
      title={currentStage?.name ?? ''}
      addWord={unlockWord}
    >
      <WordsCompleted wordsCompleted={wordsCompleted} />
    </GameLayout>
  )
}
