import { useState, forwardRef } from 'react'
import './Landing.css'
import bvsStandard from './images/bvsdj_standard.png';
import bvs190 from './images/bvsdj_1.90_1.png';
import bvs143 from './images/bvsdj.jpeg';
import oppenheimerPoster from './images/oppenheimerPoster.jpg'
import twistersPoster from './images/twistersposter.jpg'
import supermanPoster from './images/supermanIMAX.jpg'

const ARExamples = forwardRef((props, ref) => {
 
  return (
      <div className="flex justify-center items-center gap-4 bg-linear-to-t from-[#093477] to-[#051E36] flex-col font-sans">
        
        <div ref={ref} className="flex flex-grow flex-col text-white">
          <h1 className="text-[2rem]">
            <b>Aspect Ratios</b>
          </h1>
          <p className="text-m">
            The various aspect ratios that films offer.
          </p>
        </div>
        
        <div className='flex flex-col flex-shrink  max-w-100 md:max-w-300 p-4 gap-5 justify-center'>
          
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-t from-[#072C4F] to-[#0541A1] border-2 border-solid border-white text-white rounded-xl p-4'>
              <div className=' w-70 md:w-270'>
                <img src={bvsStandard} alt={"BVS Standard Aspect Ratio Still"}></img>
              </div>
              <div>
                <h1 className='text-center md:text-left text-[2rem]'>2.40:1/2.39:1/1.85:1 (Standard Widescreen)</h1>
                <p className='text-center md:text-left text-[1rem]'>These are the standard aspect ratios. It's the most common widescreen format you can watch a film in. Sometimes IMAX film releases are limited to these ratios, and the exclusive IMAX posters for those films would say "Experience it in IMAX." It is also often projected using laser projection at theaters.</p>
              </div>
              <div className=' w-60 md:w-110'>
                <img src={twistersPoster} alt={"twisters poster"}></img>
              </div>
          </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-t from-[#072C4F] to-[#0541A1] border-2 border-solid border-white text-white rounded-xl p-4'>
              <div className='w-70 md:w-255'>
                <img src={bvs190} alt={"BVS Digital IMAX Aspect Ratio Still"}></img>
              </div>
              <div>
                <h1 className='text-center md:text-left text-[2rem]'>1.90:1 (Digital IMAX)</h1>
                <p className='text-center md:text-left text-[1rem]'>This is the common IMAX aspect ratio. It's digital, usually for jilms specifically shot with IMAX certified digital cameras or for a 1:43.1 film cropped to fit the 1.90:1 frame. Most IMAX venues offers this format in laser projection and posters for these films are typically labeled "Filmed for IMAX"</p>
              </div>
              <div className='w-55 md:w-100'>
                <img src={supermanPoster} alt={"superman poster"}></img>
              </div>
          </div>
          
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-t from-[#072C4F] to-[#0541A1] border-2 border-solid border-white text-white rounded-xl p-4'>
              <div className='w-70 md:w-360'>
                <img src={bvs143} alt={"BVS 1.43:1 Aspect Ratio Still"}></img>
              </div>
              <div>
                <h1 className='text-center md:text-left text-[2rem]'>1.43:1 (IMAX 70mm)</h1>
                <p className='text-center md:text-left text-[1rem]'>This is the definitive IMAX format. It is rare for a film to be shot on 70mm IMAX film with the aspect ratio. In the last few years, Christopher Nolan, Denis Villeneueve, and Ryan Coogler have pushed for this format to be the ultimate way to watch a movie in. But only very few venues can actually project this, especially in Canada. Posters for films in this format state that it is "Shot with IMAX Cameras"</p>
              </div>
              <div className='w-55 md:w-160'>
                <img src={oppenheimerPoster} alt={"oppenheimer poster"}></img>
              </div>
          </div>

        </div>
       
        <div className='flex justify-center'>
          <h1 className='p-4 font-bold text-2xl text-white'>Premium Large Format Theater Visualizer</h1>
        </div>

        </div>
  );
})

export default ARExamples;
