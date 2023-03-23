
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import OutsideAlerter from "../funciotn/OutsideAlert"


const Navbar=()=>{
    const variants = {
        open: { opacity: 1, y:-50 },
        closed: { opacity: 0, y:-100 },
      }
const cambiar=()=>{
    setDropdown(false)
}
    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
        
    }

    

    const [dropdown,setDropdown]=useState(false)
    return(
        <header>
       <Link to={"/"}><img className="logo" src={logo} alt="" /></Link>
       <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
           <nav className={`header__nav ${menu ? 'isActive' : ''} `}>
            <ul  className="nav__ul">
            <Link to={"/acerca"}><li className="nav__item">Acerca de mi</li></Link>
            <li onClick={()=>{setDropdown(dropdown => !dropdown)}  } className="nav__item">Skills

            <motion.nav
      animate={dropdown ? "open" : "closed"}
      variants={variants}
    >
        <OutsideAlerter cambiar={cambiar}>
        <ul className={`dropdown ${dropdown ? 'isActive': ''}`} >
                <Link to={'/musica'} ><li>Música</li></Link> 
                <Link to={'/edicion'}><li>Edición de video</li></Link>
                <Link to={'/programacion'}><li>Programación</li></Link>
                <Link to={'/ilustraciones'}><li>Ilustraciones digitales</li></Link>
            </ul>

        </OutsideAlerter>
           
    </motion.nav>

            
            </li>
            <li className="nav__item">Redes</li>
            
            </ul>
        </nav>
       
        
        
    </header>
    )
}

export default Navbar