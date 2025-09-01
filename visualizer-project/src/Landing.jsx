import { useState, useRef } from 'react'
import './Landing.css'

import landingvideo from './images/landingvideo.mp4';
import countdown from './images/countdown.mp4';
import IMAX_Countdown from './images/IMAX_countdown.mp4'
import MIF_AR from './images/MIF_AR.mp4'



function LandingPage({sectionRef}) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    sectionRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      
      <div className="relative w-full h-screen overflow-hidden font-san  ">
          <video className="absolute top-0 left-0 w-full h-full object-cover"src={IMAX_Countdown} muted autoPlay loop>
              <source type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        <div className="relative z-10 flex flex-grow items-center justify-center h-full flex-col text-white shadow-xl/40 bg-linear-to-t from-[#051E36] via-[#0F4E8C] to-transparent">
          <h1 className="text-[10rem]">
            <b>P.L.F</b> Visualizer
          </h1>
          <div className='flex flex-shrink w-200'>
            <p className="text-[2rem] text-wrap">
              A visualizer created to give a visual view of what your local theatre can present when it comes to premium large formats, mainly IMAX.
            </p>

          </div>
          <div className="p-5 ">
            <button onClick={handleClick} className="  hover:bg-[#99DFFF] bg-[#0079BA]  text-white font-bold py-2 px-4 rounded">V</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default LandingPage;
