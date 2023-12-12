import { FC, useEffect, useMemo, useState } from 'react'
import { GameHeader } from '../../components'
import { useScreensContext } from '../../providers'

const getColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${'0'.repeat(6 - color.length)}${color}`
}

const WordsAddedList: FC<{ wordsAdded: string[] }> = ({ wordsAdded }) => {
  return (
    <ul className="flex gap-3 flex-wrap">
      {wordsAdded.map((word) => (
        <li
          className="px-3 py-1 rounded"
          key={word}
          style={{ backgroundColor: getColor() }}
        >
          {word}
        </li>
      ))}
    </ul>
  )
}

const EmptyMessage = () => <p>Aún no has agregado palabras</p>

const AddWordsForm: FC<{
  addWord: (evt: React.FormEvent<HTMLFormElement>) => void
}> = ({ addWord }) => {
  return (
    <form className="flex gap-2 w-full" onSubmit={addWord}>
      <input
        className="flex-1 p-3 rounded"
        type="text"
        placeholder="Agrega una palabra"
      />
      <button>Agregar</button>
    </form>
  )
}

const Win = () => {
  const { next } = useScreensContext()
  return (
    <div className="flex flex-col gap-2">
      <h2 className="w-full text-center text-2xl font-semibold">
        ¡Lo has logrado!
      </h2>
      <button className="w-full" onClick={next}>
        Vamos al siguiente
      </button>
    </div>
  )
}

export const AddWords = () => {
  const { currentStage } = useScreensContext()

  const [wordsAdded, setWordsAdded] = useState<string[]>([])
  const [levelCompleted, setLevelCompleted] = useState(false)

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
    </div>
  )
}
