import { useState } from 'react'
import './Landing.css'


function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-grow min-h-80 justify-center bg-linear-to-r from-[#06224F] to-[#0091FF] flex-col font-sans ">
        <div class="flex flex-grow items-center justify-center flex-col text-white shadow-xl/40">
          <h1 class="text-[5rem]">
            <b>P.L.F</b> Visualizer
          </h1>
          <p class="text-m">
            A visualizer designed to give and provide a visual view what your local theater can offer when it comes to premium large formats, mainly IMAX.
          </p>
        </div>
      </div>

    </>
  )
}

export default LandingPage
