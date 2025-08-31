import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Landing'
import ARExamples from './visualExamples'
import Visualizer from './visualizer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <LandingPage></LandingPage>
      <ARExamples></ARExamples>
      <Visualizer></Visualizer>
    </>
  )
}

export default App
