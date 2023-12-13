import { useEffect, useMemo, useState } from 'react'
import { EmptyMessage, GameHeader } from '../../components'
import { useScreensContext } from '../../providers'
import { AddWordsForm, Win, WordsAddedList } from './components'
import { AwardModal } from '../../components/AwardModal'

export const AddWords = () => {
  const { currentStage } = useScreensContext()

  const [wordsAdded, setWordsAdded] = useState<string[]>([])
  const [levelCompleted, setLevelCompleted] = useState(false)
  const [openModal, setOpenModal] = useState(false)

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

  useEffect(() => {
    if (listOfWordsToAdd.length === wordsAdded.length) {
      setLevelCompleted(true)
      setOpenModal(true)
    }
  }, [listOfWordsToAdd, wordsAdded])

  return (
    <div className="flex flex-col justify-between h-full p-4 gap-8">
      <GameHeader
        currentProgress={wordsAdded.length}
        total={listOfWordsToAdd.length}
        title={currentStage?.name ?? ''}
      />
      <div className="flex-1">
        {wordsAdded.length ? (
          <WordsAddedList wordsAdded={wordsAdded} />
        ) : (
          <EmptyMessage />
        )}
      </div>
      {levelCompleted ? <Win /> : <AddWordsForm addWord={addWord} />}
      <AwardModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}
