import React from 'react'
import './acerca.css'
import { motion } from "framer-motion"
import Recomendaciones from '../Recomendaciones/Recomendaciones'
import { useState, useEffect } from 'react'

const Acerca = () => {

  const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setWindowSize(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);


  window.scrollTo(0, 0);
  return (
    <div className='acerca__container'>
      <div className='acerca__head'>
      <motion.div animate={{scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0] } }
     
 >
      <img src={require('../../assets/avatar-damian/3.png')} alt="" />
      </motion.div>
      <motion.div initial={{x:200}} animate={{ x:0  } }
     
 >
      <h2>¿Quién soy?</h2>
      </motion.div>
      
      </div>
      <div className='flechas'>
      <motion.div animate={{ y: [null, 100, 0,100,0,100,0,100,0,100,0] }}
      transition={{ duration: 7, times: [0, 0.2, 1] }}
      >
      
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-file-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-file-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-file-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
</svg>
      
      </motion.div>
      </div>


 { windowSize < 768 ? <div className='acerca__body'>
      <div>
      <div className='acerca__card'>
      
      <p>¡Hola! Me llamo Damián y tengo 34 años. Soy originario de Buenos Aires, Argentina, la cuna del fútbol y campeona del mundo. Desde pequeño, siempre he sido una persona curiosa y me encanta entender cómo funcionan las cosas. Por esta razón, decidí estudiar en la escuela técnica donde finalmente obtuve mi título como técnico electromecánico. Estoy orgulloso de mi formación y siempre busco aplicar mis conocimientos para solucionar problemas y mejorar el mundo que me rodea.</p>
      <img src={require('../../assets/avatar-damian/2.png')} alt="" />
     
      
      </div>
      </div>
      
      
      <div>
      <div className='acerca__card'>
      <img src={require('../../assets/avatar-damian/4.png')} alt="" />
      <p>Desde hace varios años, he estado aprendiendo de manera autónoma acerca de programas que siempre han despertado mi interés, como Photoshop, Illustrator, entre otros. Sin embargo, mi curiosidad fue más allá y decidí profundizar en el conocimiento sobre la programación y las tecnologías relacionadas. Este no es el primer caso en el que me ha sucedido algo así. Durante mi juventud, aprendí a tocar la guitarra y luego, en el conservatorio, completé mi formación básica. Sin embargo, sentí la necesidad de conocer cómo producía el sonido mi guitarra eléctrica, por lo que decidí estudiar luthería. Esta sed de conocimiento ha sido una constante en mi vida y siempre estoy dispuesto a aprender algo nuevo.</p>
      </div>
      </div>
      
      <div>
      <div className='acerca__card'>
      
      <p>Actualmente, estoy llevando a cabo mis estudios pedagógicos en la Universidad Tecnológica Nacional (UTN) con el fin de habilitar mi título como Técnico Electromecánico y ejercer como docente. Además, estoy estudiando la tecnicatura en programación en la Universidad de Hurlingham (UNAHUR). Mi interés por la tecnología y la innovación no termina aquí, ya que tengo planificado estudiar sobre inteligencia artificial, un área que últimamente ha despertado mi gran interés. Pueden ver algunas de mis ilustraciones realizadas con Midjourney y Stable Diffusion en esta página, que son prueba de mi pasión por este campo.</p>

      <img src={require('../../assets/avatar-damian/5.png')} alt="" />
      </div>
      </div>
      

      </div> : <div className='acerca__body'>
      <motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      
      <p>¡Hola! Me llamo Damián y tengo 34 años. Soy originario de Buenos Aires, Argentina, la cuna del fútbol y campeona del mundo. Desde pequeño, siempre he sido una persona curiosa y me encanta entender cómo funcionan las cosas. Por esta razón, decidí estudiar en la escuela técnica donde finalmente obtuve mi título como técnico electromecánico. Estoy orgulloso de mi formación y siempre busco aplicar mis conocimientos para solucionar problemas y mejorar el mundo que me rodea.</p>
      <img src={require('../../assets/avatar-damian/2.png')} alt="" />
     
      
      </div>
      </motion.div>
      
      
      <motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      <img src={require('../../assets/avatar-damian/4.png')} alt="" />
      <p>Desde hace varios años, he estado aprendiendo de manera autónoma acerca de programas que siempre han despertado mi interés, como Photoshop, Illustrator, entre otros. Sin embargo, mi curiosidad fue más allá y decidí profundizar en el conocimiento sobre la programación y las tecnologías relacionadas. Este no es el primer caso en el que me ha sucedido algo así. Durante mi juventud, aprendí a tocar la guitarra y luego, en el conservatorio, completé mi formación básica. Sin embargo, sentí la necesidad de conocer cómo producía el sonido mi guitarra eléctrica, por lo que decidí estudiar luthería. Esta sed de conocimiento ha sido una constante en mi vida y siempre estoy dispuesto a aprender algo nuevo.</p>
      </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y:200 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 2, times: [0, 1] }}
  >
      <div className='acerca__card'>
      
      <p>Actualmente, estoy llevando a cabo mis estudios pedagógicos en la Universidad Tecnológica Nacional (UTN) con el fin de habilitar mi título como Técnico Electromecánico y ejercer como docente. Además, estoy estudiando la tecnicatura en programación en la Universidad de Hurlingham (UNAHUR). Mi interés por la tecnología y la innovación no termina aquí, ya que tengo planificado estudiar sobre inteligencia artificial, un área que últimamente ha despertado mi gran interés. Pueden ver algunas de mis ilustraciones realizadas con Midjourney y Stable Diffusion en esta página, que son prueba de mi pasión por este campo.</p>

      <img src={require('../../assets/avatar-damian/5.png')} alt="" />
      </div>
      </motion.div>
      

      </div> }

      
      <Recomendaciones/>
      
    </div>
  )
}

export default Acerca
