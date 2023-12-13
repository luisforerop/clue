import { FC } from 'react'

const getColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${'0'.repeat(6 - color.length)}${color}`
}

export const WordsAddedList: FC<{ wordsAdded: string[] }> = ({
  wordsAdded,
}) => {
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
