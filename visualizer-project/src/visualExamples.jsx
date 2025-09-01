import { useState, forwardRef } from 'react'
import './Landing.css'
import oppenheimer_still239 from './images/oppenheimer_still_239.jpg';
import oppenheimer_still190 from './images/oppenheimer_still_190.jpg';
import oppenheimer_still from './images/oppenheimer_still.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ARExamples = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
 
  return (
      <div className="flex max-w-screen bg-[#051E36] flex-col font-sans">
        <div ref={ref} className="flex flex-grow flex-col text-white">
          <h1 className="text-[2rem]">
            <b>Aspect Ratios</b>
          </h1>
          <p className="text-m">
            The various aspect ratios that many films offer.
          </p>
        </div>
        <div className=" flex max-w-screen justify-center items-center flex-row p-4 gap-4">
          <Card sx={{ maxWidth: 540, padding: 5}}>
          <CardMedia
            sx={{ height: 270 }}
            image={oppenheimer_still239}
            title="Oppenheimer standard"
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2.39:1 (Scope)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The standard projection and aspect ratio in every theater. All movies are projected in this aspect ratio. Also known as DCP.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 540, padding: 5 }}>
          <CardMedia
            sx={{ height: 304 }}
            image={oppenheimer_still190}
            title="Oppenheimer Laser IMAX"
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                1.90:1 (Laser)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The more common IMAX projection and aspect ratio for IMAX film releases.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 540, padding: 5 }}>
          <CardMedia
            sx={{ height: 394 }}
            image={oppenheimer_still}
            title="Oppenheimer IMAX"
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                1.43:1 (Scope)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The true projection and aspect ratio for films shot with official IMAX cameras. The most immersive format out there.
              </Typography>
            </CardContent>
          </Card>
        </div>
        
            {/* <div className="flex flex-row items center justify-center gap-2 p-2">
              <div className="text-[1rem] flex flex-col">
                <h1 className="text-l">2.39:1</h1>
                <img className="aspect-auto" src={oppenheimer_still239}></img>
              </div>
              <div className="text-[1rem] flex flex-col">
                <h1 className="text-l" >1.90:1</h1>
                <img className="aspect-auto" src={oppenheimer_still190}></img>
              </div>
              <div className="text-[1rem] flex flex-col">
                <h1 className="text-l">1.43:1</h1>
                <img className="aspect-auto" src={oppenheimer_still}></img>
              </div>
            </div> */}

        </div>
  );
})

export default ARExamples;
