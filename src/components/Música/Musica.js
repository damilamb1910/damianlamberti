import React from 'react'
import MusicaList from '../MusicaList/MusicaList'
import "./musica.css"
import { db } from "../../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";

const Musica = () => {
    
    const [listProductos,setListProductos]=useState([])
  const [loading,setLoading]=useState(true)
  



const {categoriaId}=useParams()

useEffect(()=>{
        window.scrollTo(0, 0)
        setLoading(true)
        const prodCollection=collection(db,'products')
    
         if(categoriaId){
            console.log(categoriaId)
            const q=query(prodCollection,where('categoria','==',categoriaId))
            getDocs(q)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
             console.log(q)
        }else{
        
        getDocs(prodCollection)
        .then(data => setListProductos(data.docs.map(product=>
             ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
        }console.log(prodCollection)
        },[categoriaId])
           
    
         
        
        
        
        
        
        
            return(
            <>
            
            <img src={require("../../assets/backMusic.jpg")} alt="" />
            <div className='titulo__musica'>
           
            <h2 >Música</h2>
            <h3>Te invito a ver y escuchar un poco de lo que me gusta hacer...</h3>
            </div>

            {

                loading ? <h3>cargando</h3> :<MusicaList listProductos={listProductos} categoria={categoriaId}/>
            }
            
            
            </>
                
            )
        }

export default Musica
