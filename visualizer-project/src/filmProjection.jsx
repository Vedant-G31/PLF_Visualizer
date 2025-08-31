import { useState, useEffect, useRef, useMemo } from 'react';
import { Image } from 'react-konva';

const Video = ({ src, x = 20, y = 20, videoWidth = 0, videoHeight = 0, displayMovie = false}) => {
  const imageRef = useRef(null);
  const [size, setSize] = useState({ width: 50, height: 50 });

  // Create video element once per src
  const videoElement = useMemo(() => {
    const video = document.createElement('video');
    video.src = src;
    video.crossOrigin = 'anonymous';
    video.muted = true; // optional: avoid autoplay issues
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    return video;
  }, [src]);

  // Update size when video metadata is loaded
  useEffect(() => {
    const handleLoadedMetadata = () => {
      setSize({
        width: videoElement.videoWidth,
        height: videoElement.videoHeight,
      });
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoElement]);

  // Trigger video redraw using requestAnimationFrame
  useEffect(() => {
    const layer = imageRef.current.getLayer();
    let animationFrameId;

    const renderLoop = () => {
      if (imageRef.current) {
        // Force Konva to redraw the image layer
        layer.batchDraw();
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    videoElement.play();
    renderLoop();

    return () => cancelAnimationFrame(animationFrameId);
  }, [videoElement]);

  return (
    <Image
      ref={imageRef}
      image={videoElement}
      x={x}
      y={y}
      width={videoWidth}
      height={videoHeight}
      visible={displayMovie}
    />
  );
};

export default Video;
