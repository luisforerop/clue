import './App.css'
import { ScreensProvider } from './providers'
import { ScreenManager } from './screens'

function App() {
  return (
    <ScreensProvider>
      <ScreenManager />
      <div id="award-modal" />
    </ScreensProvider>
  )
}

export default App
