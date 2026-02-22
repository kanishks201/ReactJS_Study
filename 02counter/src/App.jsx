import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // useState is a Hook, counter is variable and setCounter is a function
  // let counter = 15

  const AddValue = () => {
    // counter = counter + 1
    // prevCounter is used to get previous value stored in counter variable
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React JS</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={AddValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
