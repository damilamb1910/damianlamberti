import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import "./carrousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrousel=({images})=> {
  


  

  return (
    <Carousel>
        {images.map((image, index) => ( <Carousel.Item key={index}>   <img className="d-block w-100" src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
  )) }
      
    </Carousel>
  );
  
}

export default Carrousel