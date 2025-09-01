import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Landing'
import ARExamples from './visualExamples'
import Visualizer from './visualizer'


function App() {
  const [count, setCount] = useState(0)
  const sectionRef = useRef(null);
  return (
    <>
   
      <LandingPage sectionRef={sectionRef}></LandingPage>
      <ARExamples ref={sectionRef}></ARExamples>
      <Visualizer></Visualizer>


    </>
  )
}

export default App
