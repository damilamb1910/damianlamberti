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
    <svg onClick={cambiar} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle svg-icon" viewBox="0 0 20 20">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>
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
