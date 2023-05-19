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
             <div className='img__container'>
             <img onClick={cambiarDisplay} className='img__detail' onLoad={cambiar} src={producto.img} alt="" />
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
