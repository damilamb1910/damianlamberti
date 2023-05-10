import React from 'react'
import YouTubePreview from '../youtubePreview/YouTubePrevieb'
import "./musicaList.css"
import ItemProgramacion from '../itemProgramacion/ItemProgramacion'
import { Link } from 'react-router-dom'



const MusicaList = ({listProductos,categoria}) => {
  return (
    <div className='musicalist__container'>

{

categoria=== "programacion" ? listProductos.map((prod, i)=> 
<Link to={`/detail/${prod.id}`} key={`${prod.titulo}-${i}`}>
<ItemProgramacion  producto={prod} />
</Link>
) :

listProductos.map((prod, i)=> 


<YouTubePreview key={`${prod.titulo}-${i}`} producto={prod} />)}
    
   
    </div>
    
  )
}

export default MusicaList
