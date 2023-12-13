import { useScreensContext } from '../../../providers'

export const Win = () => {
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
