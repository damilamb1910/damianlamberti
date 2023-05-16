import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Typed from 'typed.js';
import Loading from '../Loading/Loading';

const Home = () => {
  
  const el = useRef();
  // Create reference to store the Typed instance itself
	const typed = useRef();
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    const options = {
    	strings: [
        'Soy <i>Diseñador web</i> ',
        '<i>Tecnologías:</i> ',
        '<strong>HTML5...</strong>',
        '<strong>CSS...</strong>',
        '<strong>Javascript...</strong>',
        '<i>Frameworks:</i> ',
        '<strong>Boostrap...</strong>',
        '<strong>React Js...</strong>',
        '<i>Herramientas:</i> ',
        '<strong>Visual Studio Code...</strong>',
        '<strong>Adobe Photoshop...</strong>',
        '<strong>Adobe XD...</strong>',
        '<strong>Adobe Illustrator...</strong>',
        '<strong>Adobe Premier...</strong>',
        'Soy <strong>UN CREATIVO</strong>',

      ],
      typeSpeed: 50,
      backSpeed: 30,
      
      
    };
    
   
    typed.current = new Typed(el.current, options);
    return () => {
      
      typed.current.destroy();
    }
    
  }, [])

  
  
   

const cambiarLoad=()=>{
  setLoading(false)
}

  return (
    
    <>
    <Loading loading={loading}/>
     <div className='section__presentación'>
      <img onLoad={cambiarLoad} className="logo__completo" src={require('../../assets/logo2.png')} alt=""></img>
      <div className='tipeo'>
      <span  style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
     
    </div> 
    
    </>
    
  )
}

export default Home
