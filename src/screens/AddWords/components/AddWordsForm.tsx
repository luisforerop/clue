import { FC } from 'react'

type AddWordsFormProps = {
  addWord: (evt: React.FormEvent<HTMLFormElement>) => void
}

export const AddWordsForm: FC<AddWordsFormProps> = ({ addWord }) => {
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
