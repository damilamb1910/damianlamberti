import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import "./youtubePreview.css"

const YouTubePreview = ({ producto }) => {



const [preview, setPreview] = useState(null);
const [activeVideo,setActiveVideo]=useState(false)



  useEffect(() => {
   
const previewUrl = `https://img.youtube.com/vi/${producto.videoId}/mqdefault.jpg`;
    setPreview(previewUrl);
  }, [producto.videoId]);


  const cambiar=()=>{
    setActiveVideo(!activeVideo)
  }




  return (
    <div className='card__video'>
    
      <img onClick={ cambiar } src={preview} alt="Video preview" />
   
      
    

{activeVideo && <div onClick={cambiar} className={'active__video'}>
    <YouTube className='youtube' videoId={producto.videoId} />
    </div> }
    
    <h4>{producto.titulo}</h4>
  </div>
  )
}

export default YouTubePreview
