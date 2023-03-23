import "./Nav.css"

const Dropdown=()=>{
    return(
        <ul id="dropdownMenu" className="dropdown__menu">
                    <li className="dropdownMenu__item"><a href="pages/ilustraciones.html">Ilustraciones</a></li>
                    <li className="dropdownMenu__item"><a href="pages/video.html">Edición de video</a></li>
                    <li className="dropdownMenu__item"><a href="">Desarrollo web</a></li>
                    <li className="dropdownMenu__item"><a href="">Música</a></li>
                    <li className="dropdownMenu__item"><a href="">Electromecánica</a></li>
                    <li className="dropdownMenu__item"><a href="">Community manager</a></li>
                </ul>
    )
}

export default Dropdown