


import './itemProgramacion.css'
import SkeletonCard from '../skeletonCard/SkeletonCard'
import { useState, useEffect } from 'react'



const ItemProgramacion = ({ producto }) => {

const[loading,setLoading]=useState(true)
const[display,setDisplay]=useState('display__none')
const cambiartodo=()=>{
setDisplay('card__item__programacion')
setLoading(false)
}



  return (
    <>
    {loading && <SkeletonCard/>
      
    }
      <div className={display}>
     
    <img onLoad={cambiartodo} src={producto.img } alt="" />
    <h3>{producto.titulo }</h3>
    <h4>{producto.miniDescripcion }</h4>
        </div>
      
      
     
    </>

    

    
    
  )
}

export default ItemProgramacion
