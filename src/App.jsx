import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContractorDashboard from './pages/contractor/ContractorDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContractorDashboard/>
    </>
  )
}

export default App
