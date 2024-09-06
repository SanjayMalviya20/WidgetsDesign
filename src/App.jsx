import FirstWidgets from "./components/FirstWidgets"
import SecondWidgets from "./components/SecondWidgets"

function App() {
  return (
    <>
    <div className="App justify-start gap-2 p-3 flex flex-col h-[98%] w-[80%] rounded-lg bg-neutral-900  items-center ">
      <FirstWidgets/>
      <SecondWidgets/>
    </div>
    </>
  )
}

export default App
