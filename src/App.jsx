import useSwitch from "./useSwitch"
import useDate from "./useDate"


function App() {
  const [isOn, toggle] = useSwitch()
  const currentDate = useDate()
  return (
    <>
      <div>
        <h1>il valore é: {isOn ? 'ON' : 'OFF'}</h1>
        <button onClick={toggle}>Cambia Statto</button>
      </div>

      <div>
        <h1>Date e ora atttuali</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  )
}

export default App
