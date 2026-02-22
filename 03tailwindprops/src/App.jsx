import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card2 from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "User",
    age: 21
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card2 username="chaiaurcode" buttonText="Click me" someObj={myArr} />
      <Card2 username="User"/>
    </>
  )
}

export default App
