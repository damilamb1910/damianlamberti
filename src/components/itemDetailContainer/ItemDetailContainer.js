import React from 'react'
import { useEffect,useState } from "react"

import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"
import ItemDetail from '../itemDetail/ItemDetail';


const ItemDetailContainer = () => {
    
    
    const [producto,setProducto]=useState({})
    
    
const {id}=useParams()

    
    useEffect(()=>{
        
        window.scrollTo(0, 0)
        const productCollection=collection(db,'products')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto(
                {
                    id:res.id, ...res.data()
                }
            )
        })
       },[id])

       


    return(
        <>
        
        
         
    
    <ItemDetail  producto={producto} />
      
        
        </>
    )
  
}

export default ItemDetailContainer
