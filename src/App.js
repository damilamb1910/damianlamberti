
import './App.css';
import Nabvar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Acerca from './components/acerca/Acerca';
import Footer from './components/footer/Footer';
import Edicion from './components/edicion/Edicion';
import CartContext from './context/CartContext';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <>
   
    <>
    <CartContext>

    
    <BrowserRouter>
    <Nabvar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/acerca" element={<Acerca/>}/>
        <Route path="/productos/:categoriaId" element={<Edicion/>}/>
        
       
        
        
          
        
      </Routes>
    
    </BrowserRouter>
    
    
    
    <Footer/>
    </CartContext>
    </>
    </>
  );
}

export default App;
