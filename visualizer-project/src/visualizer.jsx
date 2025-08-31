import { useState, useEffect, useRef } from 'react'
import './Landing.css'
import { Stage, Layer, Rect, Circle, Image, Shape, Text } from 'react-konva';
import TableofTheaters from './tableOftheaters';
import TableofProjDetails from './projectionDetails';
import Video from './filmProjection';
import Person from './person'

import MIF_AR from './images/MIF_AR.mp4';
import tdkIMAX from './images/tdkIMAXtrim.mp4'



import useImage from 'use-image';
import brstill1 from './images/brstill1.jpg';
import dune_dcp from './images/dune_dcp.jpg';
import duneLaser from './images/duneLaser.jpg';
import duneImax from './images/duneImax.jpg';
import seatstrs from './images/seatstrs.png';


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

  const [auditoriumImage] = useImage(seatstrs);


  /*every 10 units is 1 ft?*/
  return (
    <>
      <div class="flex min-h-screen justify-center bg-linear-to-r from-[#06224F] to-[#0091FF] flex-col lg:flex-row font-sans">
        <div class="flex flex-col justify-center flex-shrink lg:flex-grow items-center text-white shadow-xl/40">
          <h1 class="flex p-4 font-bold text-2xl">List of Theaters (Canada)</h1>
          <div class="flex pl-4 pr-4 pb-4">
              <TableofTheaters theaterSelected={scName} onTheaterHeight={setScreenHeight} onTheaterWidth={setScreenWidth} onTheaterName={setScreenName} onAspectRatio={setAspectRatio}></TableofTheaters>
          </div>
        </div>
        <div class="flex flex-col flex-shrink lg:flex-grow items-center justify-center bg-[#071c38] text-white shadow-xl/40 pl-4 pr-4 pt-8">
          {/* <div><h1 class="flex p-4 font-bold text-2xl">{scName}</h1></div> */}
                <Stage width={screenWidth + 10} height={70}>
                  <Layer>
                      <Text
                            width={screenWidth}
                            x = {0}
                            y = {0}
                            text = {scName}
                            align="center"
                            fontSize = {30}
                            fontFamily = "Calibri"
                            wrap="word"
                            fill = "white"
                          />
                    </Layer>
                </Stage>
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
                        />
                        <Video src={((aspectRatio == "1.90:1" && displayMovie) || (displayLaser)) ? MIF_AR : tdkIMAX} x={0} y={(displayLaser ? ((screenHeight*0.125)) : 0)} videoWidth={screenWidth} videoHeight={(aspectRatio == "1.90:1") ? screenHeight : (displayLaser) ? (screenHeight*0.75) : screenHeight} displayMovie={displayMovie}></Video>
                  </Layer>
                </Stage>
                <Stage width={screenWidth} height={displayMovie ? ((stageSize.height)/2 + 40) : (stageSize.height)/2}>
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
                        strokeWidth={1}
                      />
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
            {/* <h1 class="flex flex-wrap p-4 max-width-20 text-10" style={!displayMovie ? {display:"none"} : {display:"block"}}>Movie footage belongs to its respective copyright owners. This project is a non-commercial visualization tool intended to illustrate screen formats (1.90:1 vs 1.43:1) for educational purposes.</h1> */}
            <div class="flex flex-row justify-center items-center">
                <div class="p-4"><button onClick={() => {
                  if (!displayMovie && cropColor == "#FFFFFF") {
                    setCropColor("#000000")
                    setDisplayMovie(true)
                    setDisplayLaser(false)
                  } else {
                    setCropColor("#FFFFFF")
                    setDisplayMovie(false)

                  }
                }} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Project Film</button></div>
                <div class="p-2" style={aspectRatio == "1.43:1" ? {display: "block"} : {display:"none"}}><button onClick={() => {
                  if ((!displayLaser)) {
                    setCropColor("#000000")
                    setDisplayLaser(true)
                    
                    console.log("Yeet")
                  } else {
                    setCropColor("#FFFFFF")
                    setDisplayLaser(false)
                  }
                }} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Project 1.90:1</button></div>
                </div>
            
            
          <div class="flex p-4">
             <TableofProjDetails theaterSelected={scName}></TableofProjDetails>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Visualizer

