
import './App.css';
import Nabvar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Acerca from './components/acerca/Acerca';
import { useEffect,useState } from 'react';
import Loading from './components/Loading/Loading';
import Footer from './components/footer/Footer';
import Musica from './components/Música/Musica';
import Edicion from './components/edicion/Edicion';
import Ilustraciones from './components/ilustraciones/Ilustraciones';
import Programacion from './components/programacion/Programacion';

function App() {
  const [loading,setLoading]=useState(false)


useEffect(()=>{
  setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
},[]

)
  return (
    <>
    {loading ? <Loading /> :
    <>
    <BrowserRouter>
    <Nabvar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/acerca" element={<Acerca/>}/>
        <Route path="/musica" element={<Musica/>}/>
        <Route path="/edicion" element={<Edicion/>}/>
        <Route path="/ilustraciones" element={<Ilustraciones/>}/>
        <Route path="/programacion" element={<Programacion/> }/>
        
          
        
      </Routes>
    
    </BrowserRouter>
    
    
    
    <Footer/>
    </>}
    </>
  );
}

export default App;
