import React from 'react'
import MusicaList from '../MusicaList/MusicaList'
import "./edicion.css"
import { db } from "../../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading'

const Edicion = () => {
    const [listProductos,setListProductos]=useState([])
  const [loading,setLoading]=useState(true)
  
  
  

const {categoriaId}=useParams()

useEffect(()=>{
        window.scrollTo(0, 0)
        setLoading(true)
        const prodCollection=collection(db,'products')
    
         if(categoriaId){
           
            const q=query(prodCollection,where('categoria','==',categoriaId))
            getDocs(q)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id}))))
            
        }else{
        
        getDocs(prodCollection)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id}))))
            
        }
        },[categoriaId])
           

const cambiarLoad=()=>{
  
    setLoading(false)

    
  
}

    const preguntarCategoria=(categoriaId)=>{
if (categoriaId==='musica'){

  return("https://firebasestorage.googleapis.com/v0/b/damianlambert.appspot.com/o/backMusic.jpg?alt=media&token=17b007ae-aca8-47e8-b0c0-19fe43d2e808")
}else if(categoriaId==='edicion'){
 
return( "https://firebasestorage.googleapis.com/v0/b/damianlambert.appspot.com/o/backedicion.jpg?alt=media&token=0d3ccb7e-19df-43d6-a4d2-295af09fa41c")
}else if(categoriaId==='programacion'){
 
  return( "https://firebasestorage.googleapis.com/v0/b/damianlambert.appspot.com/o/backprogramacion.jpg?alt=media&token=59799363-7cb2-4996-8675-cbd75918d165")
  }
    }
         
        
        
     
        
        
    
            return(
            <>
          <div className='contain'>
          <Loading onClick={()=>{console.log('click')}} loading={loading}/>  
             
             <img onLoad={cambiarLoad}  src={preguntarCategoria(categoriaId)}   alt="" />
            <div className='titulo__musica'>
           
            <h2 className='titulo' >{categoriaId}</h2>
            <h3>Te invito a conocer un poco de lo que me gusta hacer...</h3>
            </div>
            <MusicaList listProductos={listProductos} categoria={categoriaId}/>
          
          </div>
             
              
            
             
            

            

              
            
            
            
            </>
                
            )
        }




export default Edicion
