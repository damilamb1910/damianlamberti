import React from 'react'
import YouTubePreview from '../youtubePreview/YouTubePrevieb'
import "./musicaList.css"



const MusicaList = ({listProductos,categoria}) => {
  return (
    <div className='musicalist__container'>

{listProductos.map((prod, i)=> 


<YouTubePreview key={`${prod.titulo}-${i}`} producto={prod} />)}
    
   
    </div>
    
  )
}

export default MusicaList
