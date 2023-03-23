import { useState } from "react"
import "./Nav.css"

const Nav=()=>{

    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
        
    }

    
const lista=<ul id="dropdownMenu" className="dropdown__menu">
<li className="dropdownMenu__item"><a href="pages/ilustraciones.html">Ilustraciones</a></li>
<li className="dropdownMenu__item"><a href="pages/video.html">Edición de video</a></li>
<li className="dropdownMenu__item"><a href="">Desarrollo web</a></li>
<li className="dropdownMenu__item"><a href="">Música</a></li>
<li className="dropdownMenu__item"><a href="">Electromecánica</a></li>
<li className="dropdownMenu__item"><a href="">Community manager</a></li>
</ul>



    return(
    <>
    <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
        <nav className={`header__nav ${menu ? 'isActive' : ''} `}>
            <li className="nav__item">Acerca de mi</li>
            <li className="nav__item">Redes</li>
            <li className="nav__item">Skills</li>
        </nav>
    </>
        
    )
}

export default Nav