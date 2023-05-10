import React, { useState, useEffect } from 'react';
import './itemProgramacion.css'


const ItemProgramacion = ({ producto }) => {






  return (
    <div className='card__item__programacion'>
<img src={producto.img} alt="" />
<h3>{producto.titulo}</h3>
<h4>{producto.miniDescripcion}</h4>
    </div>
    
  )
}

export default ItemProgramacion
