import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CreditCard from './components/CreditCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <CreditCard/>
    </div>
  )
}

export default App
