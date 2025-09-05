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
                <h1 className='text-left text-[2rem]'>2.40:1 or 2.39:1</h1>
                <p className='text-left text-[1rem]'>This is the standard aspect ratio. It's the most common widescreen format you can watch a film in. Sometimes IMAX film releases can limit to the standard aspect ratio. On the exclusive IMAX posters for those films would state "Experience it in IMAX." It is also often projected in laser at the film venue.</p>
              </div>
              <div className=' w-60 md:w-110'>
                <img src={twistersPoster} alt={"twisters poster"}></img>
              </div>
          </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-t from-[#072C4F] to-[#0541A1] border-2 border-solid border-white text-white rounded-xl p-4'>
              <div className='w-70 md:w-250'>
                <img src={bvs190} alt={"BVS Standard Aspect Ratio Still"}></img>
              </div>
              <div>
                <h1 className='text-left text-[2rem]'>1.90:1</h1>
                <p className='text-left text-[1rem]'>This is the common IMAX aspect ratio. It's digital and it is often for films specifically shot with IMAX certified digital cameras or a 1:43.1 film being cropped to fit the 1.90:1. Most IMAX venues offers this format in lasers and films posters would be labeled as "Filmed for IMAX"</p>
              </div>
              <div className='w-55 md:w-100'>
                <img src={supermanPoster} alt={"superman poster"}></img>
              </div>
          </div>
          
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-t from-[#072C4F] to-[#0541A1] border-2 border-solid border-white text-white rounded-xl p-4'>
              <div className='w-70 md:w-400'>
                <img src={bvs143} alt={"BVS Standard Aspect Ratio Still"}></img>
              </div>
              <div>
                <h1 className='text-left text-[2rem]'>1.43:1</h1>
                <p className='text-left text-[1rem]'>This is the definitive IMAX format. However, it usually rare to get a film specifically shot on 70mm IMAX film with the aspect ratio. In the last few years, Christopher Nolan, Denis Villeneueve, and Ryan Coogler has heavily pushed for this format to be the best format to watch any movie in. But the venues for projecting this format is very sparse. Especially in Canada. Film IMAX exclusive posters would state that it is "Shot with IMAX Cameras"</p>
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
