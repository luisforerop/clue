import './App.css'
import { ScreensProvider } from './providers'
import { ScreenManager } from './screens'

function App() {
  return (
    <ScreensProvider>
      <ScreenManager />
    </ScreensProvider>
  )
}

export default App
