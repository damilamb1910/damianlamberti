import React from 'react'
import './recomendaciones.css'

const Recomendaciones = () => {
    
  return (
    <div className='recomendaciones'>
      <h2>Las personas dicen de mi...</h2>

<div className="card__recomendaciones__container">
<div className="card__recomendaciones__wrapper">
<div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/pablo.jpg')} alt=""/>
        <h3 className='card__name'>PABLO ROMERO</h3>
        <h4>Founder in <span onClick={()=>{
            window.open('https://www.instagram.com/sola.gratia_barberia/', '_blank')
        }} className='card__span'>SOLA GRATIA</span> </h4>
        </div>
        
        <p>Si estás buscando un profesional para editar tus imágenes, definitivamente te recomiendo a Damian. Recientemente, Damian editó algunas imágenes para mí y su trabajo es excelente. Es muy recomendable, para un trabajo bien echo ¡necesitamos profesionales avocados a su trabajo como Damian!</p>
    </div>
    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/ari.jpg')} alt=""/>
        <h3 className='card__name'>ARIADNA UNCOS</h3>
        <h4>Productora audiovisual <span onClick={()=>{
            window.open('https://www.youtube.com/@ariadnauncos3186/videos', '_blank')
        }} className='card__span'>LINK</span> </h4>
        </div>
        
        <p>Realmente recomiendo a Damián porque realiza un trabajo con excelencia, siempre en tiempo y forma. Buscando siempre las mejores opciones para que el trabajo cumpla su objetivo. Siempre todo con una gran calidad y buen criterio. </p>
    </div>
    
    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/jony.jpg')} alt=""/>
        <h3 className='card__name'>JONATAN GARCIA</h3>
        <h4>Estilista <span onClick={()=>{
            window.open('https://www.youtube.com/@ariadnauncos3186/videos', '_blank')
        }} className='card__span'>LINK</span> </h4>
        </div>
        
        <p>Damián es muy creativo, responsable y cumplidor. Además, su personalidad es admirable, siendo una buena persona que transmite confianza y credibilidad.
Si estás buscando a alguien en quien puedas confiar para que haga un trabajo de calidad, no dudes en contactar a Damian, te aseguro que no te vas a arrepentir.</p>
    </div>

    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/julio.jpg')} alt=""/>
        <h3 className='card__name'>JULIO VAQUE</h3>
        <h4>Founder in <span onClick={()=>{
            window.open('https://www.youtube.com/@ariadnauncos3186/videos', '_blank')
        }} className='card__span'>FATUGRAB</span> </h4>
        </div>
        
        <p>Damián es muy creativo, responsable y cumplidor. Además, su personalidad es admirable, siendo una buena persona que transmite confianza y credibilidad.
Si estás buscando a alguien en quien puedas confiar para que haga un trabajo de calidad, no dudes en contactar a Damian, te aseguro que no te vas a arrepentir.</p>
    </div>


    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/carlos.jpg')} alt=""/>
        <h3 className='card__name'>CARLOS PASSALACQUA</h3>
        <h4>Co-founder in <span onClick={()=>{
            window.open('https://casaenorden.000webhostapp.com/index.html', '_blank')
        }} className='card__span'>CASA EN ORDEN</span> </h4>
        </div>
        
        <p>Recomiendo a Damian por su excelente servicio de armado de página web. Su habilidad para crear sitios web atractivos, funcionales y personalizados es impresionante. Además, su capacidad para entender y atender las necesidades del cliente garantiza una experiencia satisfactoria y sin problemas. Si estás buscando un profesional confiable y talentoso para crear tu sitio web, no dudes en contactarlo.</p>
    </div>



    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/fatima.jpg')} alt=""/>
        <h3 className='card__name'>FATIMA VENEZIA</h3>
        <h4>Founder in <span onClick={()=>{
            window.open('https://kalaa.com.ar/', '_blank')
        }} className='card__span'>KALAA</span> </h4>
        </div>
        
        <p>Damián tiene una buena forma de trabajar, en tiempo y forma, resolutivo. Su trabajo es excelente. Lo recomiendo porque resuelve eficazmente las tareas y de manera rapida.</p>
    </div>

    <div className="card__recomendaciones">
        <div className='card__head'>
        <img className="card__image" src={require('../../assets/fatima.jpg')} alt=""/>
        <h3 className='card__name'>DAVID ARDILA</h3>
        <h4>Músico y productor <span onClick={()=>{
            window.open('https://www.instagram.com/davidardila04/', '_blank')
        }} className='card__span'>LINK</span> </h4>
        </div>
        
        <p>Damián es excelente, le da con el punto de la idea principal para poder obtener un producto de calidad de cuadro a la necesidad principal. Lo recomiendo por que es una persona que puede convertir tus ideas en producto terminado real  y de calidad.</p>
    </div>

    

    </div>

</div>
    
    
    


    </div>
  )
}

export default Recomendaciones
