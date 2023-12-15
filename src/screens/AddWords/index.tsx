import { useEffect, useMemo, useState } from 'react'
import { EmptyMessage, GameLayout } from '../../components'
import { useScreensContext } from '../../providers'
import { WordsAddedList } from './components'

export const AddWords = () => {
  const { currentStage } = useScreensContext()

  const [wordsAdded, setWordsAdded] = useState<string[]>([])

  const listId = useMemo(() => `${currentStage?.id}-list`, [currentStage])
  const listOfWordsToAdd = useMemo(() => {
    if (currentStage?.type !== 'add') return []

    return Array.from(
      new Set(currentStage.data.words.map((word) => word.toLowerCase()))
    )
  }, [currentStage?.data])

  useEffect(() => {}, [])

  const addWord = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const { children } = evt.target as HTMLFormElement
    const input = children[0] as HTMLInputElement
    const word = input.value.toLowerCase()

    if (!listOfWordsToAdd.includes(word)) {
      return
    }

    if (!wordsAdded.includes(word)) {
      setWordsAdded((curr) => {
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
      setWordsAdded(formattedList)
    } catch (error) {}
  }, [])

  return (
    <GameLayout
      currentProgress={wordsAdded.length}
      total={listOfWordsToAdd.length}
      title={currentStage?.name ?? ''}
      addWord={addWord}
    >
      {wordsAdded.length ? (
        <WordsAddedList wordsAdded={wordsAdded} />
      ) : (
        <EmptyMessage />
      )}
    </GameLayout>
  )
}
