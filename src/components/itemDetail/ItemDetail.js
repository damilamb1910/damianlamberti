import React, { useRef, useState } from 'react'
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



    <div className='itemDetail'>
      <div className='head__itemDetail' >
        <h2 className='titulo__itemDetail'>{producto.titulo}</h2>
      
      </div>
      <div className='info1__itemDetail'>
        <h4>Página web de enlaces para redes sociales, similar a Linktree. Este proyecto fue realizado para Fatugrab Oeste, una empresa que se dedica a la venta y distribución de insumos para serigrafia.
La página web que hemos creado es la solución perfecta para aquellos que buscan simplificar sus perfiles de redes sociales y ofrecer una experiencia de usuario más atractiva y organizada. Con esta página web de enlaces, los usuarios pueden agregar todos sus enlaces de redes sociales en un solo lugar, lo que les permite promocionar fácilmente su presencia en línea y conectarse con su audiencia de manera más efectiva.
Además, la página web es altamente personalizable, lo que significa que cada usuario puede ajustarla a sus necesidades y preferencias específicas. Ya sea que deseen personalizar los colores y el diseño, agregar imágenes o videos personalizados, o incluso integrar funciones adicionales.
Se trata de un proyecto sencillo, pero sin duda alguna, disfruté mucho haciéndolo.</h4>
      <ReactPlayer  volume={0} muted={true} autoPlay controls  loop={true} playing={isPlaying} playsinline={true} onReady={handlePlayerReady} url='https://firebasestorage.googleapis.com/v0/b/damianlambert.appspot.com/o/fatulinks.mp4?alt=media&token=ca7ebaa8-de04-46bb-8a11-f707cad4d8e8' />
      </div>
      <div className='seccion__itemDetail'>
      <div className='carrousel__container'>
        
        {producto.imagenes &&  <Carrousel images={producto.imagenes}/> }
      
      </div>
      <div className='tecnologias__contain'>
      <h3>Tecnologias</h3>
      <h4>Html, CSS y Javascript</h4>
      </div>
      </div>
      
      

      
    </div>
  
  )
}

export default ItemDetail
