import { useRef, useState } from 'react'
import { useScreensContext } from '../../providers'

const loginMessage = 'Ingresar'

export const Password = () => {
  const [typedPassword, setTypedPassword] = useState(['', '', '', ''])
  const inputsContainer = useRef<HTMLDivElement>(null)
  const { login, userLogged } = useScreensContext()

  return (
    <form
      className="flex gap-4 flex-col w-60 margin-auto"
      onSubmit={(e) => {
        e.preventDefault()
        login(typedPassword.join(''))
      }}
    >
      <div className="flex justify-between" ref={inputsContainer}>
        {typedPassword.map((key, index) => (
          <input
            value={key}
            type="text"
            key={index}
            className="w-12 h-12 text-xl flex text-center items-center"
            onChange={({ target }) => {
              const { value } = target
              if (!value.match(/[0-9]/) && value !== '') return

              setTypedPassword((curr) =>
                curr.map((character, passwordIndex) => {
                  const calculatedValue =
                    value.length < 2 ? value : value[value.length - 1]

                  return passwordIndex === index ? calculatedValue : character
                })
              )

              const inputToFocusIndex = value === '' ? index - 1 : index + 1

              const inputToFocus = inputsContainer.current?.childNodes[
                inputToFocusIndex
              ] as HTMLInputElement | undefined

              if (inputToFocus) {
                inputToFocus.focus()
              }
            }}
          />
        ))}
      </div>
      <button>{loginMessage}</button>
      {userLogged === 'error' && <span>Error</span>}
    </form>
  )
}
