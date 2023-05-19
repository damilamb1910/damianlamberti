import React, { useState } from 'react'
import Loading from '../Loading/Loading'
import './itemDetailIlustraciones.css'

const ItemDetailIlustraciones = ({producto}) => {

    const [loading,setLoading]=useState(true)
    const[display,setDisplay]=useState('display__none')
    const cambiar =()=>{
        setLoading(false)
    }
const cambiarDisplay=()=>{
    setDisplay('img__modal__container')
}

const cambiarDisplayNone=()=>{
    if(display=== 'img__modal__container'){
        setDisplay('display__none')
    }
}
  return (


    <div onClick={cambiarDisplayNone}>

<div className={display}>
<img className='img__modal' src={producto.img} alt="" />
</div>
      
      <Loading loading={loading}/>
      <div className='itemDetail'>
         <div className='head__itemDetail' >
             <h2 className='titulo__itemDetail'>{producto.titulo}</h2>
      
         </div>
         <div className='info1__itemDetail_ilustraciones'>
             <h4>{producto.descripcion}</h4>
             <div className='zoom__container'>
             <svg onClick={cambiarDisplay} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in svg-icon__ilustraciones" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
             <div className='img__container'>
            
             <img onClick={cambiarDisplay} className='img__detail' onLoad={cambiar} src={producto.img} alt="" />
             </div>
             </div>
             
             
         </div>

         <div className='seccion__itemDetail__ilustraciones'>
      
     
             <h4 onClick={()=>{window.open(`${producto.linkpublicacion}`, '_blank')}} className='programacion__botones'> 🔗 Ver publicacion en Instagram</h4>
         </div>

     
      
      

      
  </div>
    </div>
  )
}

export default ItemDetailIlustraciones
