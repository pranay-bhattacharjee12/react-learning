import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-950 text-blue-100 mb-3'>hii welcome to tailwind</h1>
      <Card name="harry" click="read more" />
      <Card name="robin" click="read more" />
      <Card name="kevin" />
    </>
  )
}

export default App
