import { useState, useEffect, useRef } from 'react'

import { Stage, Layer, Rect, Circle, Image, Shape, Text } from 'react-konva';
import TableofTheaters from './tableOftheaters';
import TableofProjDetails from './projectionDetails';
import Video from './filmProjection';

import MIF_AR from './images/MIF_AR.mp4';
import tdkIMAX from './images/tdkIMAXtrim.mp4'
import Person from './images/person.png'


import useImage from 'use-image';


function convertStrtoNumbers (num) {
    const strData = num
    const extractNum = strData.match(/[\d\.]+/g);
    if (!extractNum) return [0,0];
    console.log(extractNum)
    return extractNum;
}

function Visualizer() {

  var scaleMultiplier = 7

  const [scHeight, setScreenHeight] = useState("yeet")
  const [scWidth, setScreenWidth] = useState("yayeet")
  const [aspectRatio, setAspectRatio] = useState("1.90:1")
  const [scName, setScreenName] = useState("Select Screen")
  const [cropColor, setCropColor] = useState("#FFFFFF")
  const [displayMovie, setDisplayMovie] = useState(false)
  const [displayLaser, setDisplayLaser] = useState(false)
  const [personImage] = useImage(Person)
  
  var screenWidth = (parseInt((convertStrtoNumbers(scWidth))[0]) + (parseInt((convertStrtoNumbers(scWidth))[1]))/12)*(scaleMultiplier)
  var screenHeight = (parseInt((convertStrtoNumbers(scHeight))[0]) + (parseInt((convertStrtoNumbers(scHeight))[1]))/12)*(scaleMultiplier)
  var stageWidth = window.innerWidth/2
  var stageHeight = window.innerHeight/2

  const [stageSize, setStageWidth] = useState({
    width: stageWidth,
    height: stageHeight,
    scale: 1
  })

  // Reference to parent container
  const containerRef = useRef(null);
  
  // Function to handle resize
  const updateSize = () => {
    if (!containerRef.current) return;
    
    // Get container width
    const containerWidth = containerRef.current.offsetWidth;
    
    // Calculate scale
    const scale = containerWidth / sceneWidth;
    
    // Update state with new dimensions
    setStageSize({
      width: sceneWidth * scale,
      height: sceneHeight * scale,
      scale: scale
    });
  };
  
  // Update on mount and when window resizes
  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  /*every 10 units is 1 ft?*/
  return (
    <>
        <div className='flex bg-[#093477] '>
                <div className="flex flex-col justify-center flex-shrink lg:flex-grow items-center text-white shadow-xl/40 bg-linear-to-t from-[#051e46] to-[#093477]">
                  <h1 className="flex p-4 font-bold text-2xl">List of Theaters (Canada)</h1>
                  <div className="flex pl-4 pr-4 pb-4">
                      <TableofTheaters theaterSelected={scName} onTheaterHeight={setScreenHeight} onTheaterWidth={setScreenWidth} onTheaterName={setScreenName} onAspectRatio={setAspectRatio}></TableofTheaters>
                  </div>
                </div>
                  <div className="flex flex-col flex-shrink lg:flex-grow items-center justify-center bg-[#051e46] text-white pl-4 pr-4 pt-8">
                    <div><h1 className="flex p-4 font-bold text-2xl">{(scName == "Select Screen") ? "Select Theater" : (screenWidth == 0 || screenHeight == 0) ? "Data not available" : scName}</h1></div>
                          <Stage width={screenWidth + 10} height={screenHeight + 10} scaleX={stageSize.scale} scaleY={stageSize.scale}>
                              <Layer>
                                  <Rect
                                  x={0}
                                  y={0}
                                  width={screenWidth}
                                  height={screenHeight}
                                  fill={cropColor}
                                  stroke="black"
                                  strokeWidth={1.25}
                                  visible={(screenWidth == 0 || screenHeight == 0) ? false : true}
                                  />
                                  <Video src={((aspectRatio == "1.90:1" && displayMovie) || (displayLaser)) ? MIF_AR : tdkIMAX} x={0} y={(displayLaser ? ((screenHeight*0.125)) : 0)} videoWidth={screenWidth} videoHeight={(aspectRatio == "1.90:1") ? screenHeight : (displayLaser) ? (screenHeight*0.75) : screenHeight} displayMovie={displayMovie}></Video>
                            </Layer>
                          </Stage>
                          <Stage visible={(screenWidth == 0 || screenHeight == 0) ? false : true} width={screenWidth} height={displayMovie ? ((stageSize.height)/2 + 40) : (stageSize.height)/2}>
                            <Layer>
                                {/* <Image image={auditoriumImage} x={stageWidth/2 - screenWidth/2} y={50} width={screenWidth} height={200}/> */}
                                <Shape
                                  sceneFunc={(context, shape) => {
                                    context.beginPath();
                                    context.moveTo(screenWidth/4, 0);
                                    context.lineTo(screenWidth/1.4, 0);
                                    context.lineTo(screenWidth, (stageSize.height)/2);
                                    context.lineTo(0, (stageSize.height)/2)
                                    context.closePath();
                                    context.fillStrokeShape(shape);
                                  }}
                                  fill="#074192ff"
                                  stroke="white"
                                  strokeWidth={0}
                                />
                            </Layer>
                            <Layer>
                              <Image image={personImage} x={screenWidth/2 - (6*scaleMultiplier)/2} y={0} width={5*scaleMultiplier} height={6*scaleMultiplier}/>
                            </Layer>
                            <Layer>
                              <Text
                                  visible={displayMovie ? (true) : false}
                                  width={screenWidth}
                                  x = {0}
                                  y = {stageSize.height/2 + 10}
                                  text = {"**Movie footage belongs to its respective copyright owners. This project is a non-commercial visualization tool intended to illustrate screen formats (1.90:1 vs 1.43:1) for educational purposes."}
                                  align="center"
                                  fontSize = {10}
                                  fontFamily = "Calibri"
                                  wrap="word"
                                  fill = "white"
                                />
                            </Layer>
                          </Stage>
                      {/* <h1 className="flex flex-wrap p-4 max-width-20 text-10" style={!displayMovie ? {display:"none"} : {display:"block"}}>Movie footage belongs to its respective copyright owners. This project is a non-commercial visualization tool intended to illustrate screen formats (1.90:1 vs 1.43:1) for educational purposes.</h1> */}
                      <div className="flex flex-row justify-center items-center">
                          <div className="p-4"><button onClick={() => {
                            if (!displayMovie && cropColor == "#FFFFFF") {
                              setCropColor("#000000")
                              setDisplayMovie(true)
                              setDisplayLaser(false)
                            } else {
                              setCropColor("#FFFFFF")
                              setDisplayMovie(false)

                            }
                          }} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Project Film</button></div>
                          <div className="p-2" style={aspectRatio == "1.43:1" ? {display: "block"} : {display:"none"}}><button onClick={() => {
                            if ((!displayLaser)) {
                              setCropColor("#000000")
                              setDisplayLaser(true)
                              
                              console.log("Yeet")
                            } else {
                              setCropColor("#FFFFFF")
                              setDisplayLaser(false)
                            }
                          }} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Project 1.90:1</button></div>
                    </div>
                
                
              <div className="flex p-4">
                <TableofProjDetails theaterSelected={scName}></TableofProjDetails>
              </div>
            </div>
        </div>
        
    </>
  )
}

export default Visualizer

