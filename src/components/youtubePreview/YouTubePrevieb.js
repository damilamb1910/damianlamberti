import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import "./youtubePreview.css"
import SkeletonCard from '../skeletonCard/SkeletonCard';

const YouTubePreview = ({ producto }) => {

  const[display,setDisplay]=useState('display__none')
  const [loading,setLoading]=useState(true)
const [preview, setPreview] = useState(null);
const [activeVideo,setActiveVideo]=useState(false)
const cambiarLoad=()=>{
  setDisplay('card__video')
setLoading(false)
}



  useEffect(() => {
   
const previewUrl = `https://img.youtube.com/vi/${producto.videoId}/mqdefault.jpg`;
    setPreview(previewUrl);
  }, [producto.videoId]);


  const cambiar=()=>{
    setActiveVideo(!activeVideo)
  }




  return (
    <>
    

    {loading && <SkeletonCard/>}

    <div className={display}>
    
      <img onLoad={cambiarLoad} onClick={ cambiar } src={preview} alt="Video preview" />
   
      
    

{activeVideo && <div onClick={cambiar} className={'active__video'}>
    <YouTube className='youtube' videoId={producto.videoId} />
    </div> }
    
    <h4>{producto.titulo}</h4>
  </div>
  </>
  )
}

export default YouTubePreview
