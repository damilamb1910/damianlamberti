import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import "./itemDetail.css"
import Carrousel from '../carrousel/Carrousel';



const ItemDetail = ({producto}) => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const handlePlayerReady = () => {
    playerRef.current?.getInternalPlayer()?.play();
    setIsPlaying(true);
  };




  return (

   <>


<div className='itemDetail'>
      <div className='head__itemDetail' >
        <h2 className='titulo__itemDetail'>{producto.titulo}</h2>
      
      </div>
      <div className='info1__itemDetail'>
        <h4>{producto.descripcion}</h4>
      <ReactPlayer  volume={0} muted={true} autoPlay controls  loop={true} playing={isPlaying} playsinline={true} onReady={handlePlayerReady} url={producto.video} />
      </div>
      <div className='seccion__itemDetail'>
      <div className='carrousel__container'>
        
        {producto.imagenes &&  <Carrousel  images={producto.imagenes}/> }
      
      </div>
      <div className='tecnologias__contain'>
      <h3>🛠Tecnologias:</h3>
      <h4><ul>
        {producto.tecnologias && producto.tecnologias.map((tecno,index)=>(<li key={index}>◽{tecno}</li>))}

        </ul></h4>
        <h4 onClick={()=>{window.open(`${producto.linkpagina}`, '_blank')}} className='programacion__botones'>🔗Ingresá a la página</h4>
        <h4 onClick={()=>{window.open(`${producto.linkrepo}`, '_blank')}} className='programacion__botones'>🐱‍👤Ingresá al repositorio del proyecto</h4>
      </div>

      </div>
      
      

      
    </div>
  
   </>

   
  )
}

export default ItemDetail
