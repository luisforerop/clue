import { FC } from 'react'

export type FormInputProps = {
  addWord: (evt: React.FormEvent<HTMLFormElement>) => void
}

export const FormInput: FC<FormInputProps> = ({ addWord }) => {
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
