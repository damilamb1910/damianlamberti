import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import './loading.css'

const Loading = (loading) => {
  return (
    <>
   
    <div className='loading__container'>
      <HashLoader
        color={"#8348D8"} loading={loading} size={100}
        
/>
    </div>
    </>
    
    
    
  )
}

export default Loading
