import SettingsButton from "./components/modal/SettingsButton"
import SettingsModal from "./components/modal/SettingsModal"
import TimerStatus from "./components/timer-status/index"

function App() {

  return (
    <main>
      <h1>Pomodoro</h1>
      <TimerStatus />
      <SettingsButton />
      <SettingsModal />
    </main>
  )
}

export default App
