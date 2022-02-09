import './App.css';
import Navbar from './components/NavBar/navbar.js';
//import Navbar from 'react-bootstrap/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FunctionCounter from './components/FunctionCounter/FunctionCounter.js';

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar title="ecommerce" />
    </div>
    <ItemListContainer greeting='Hola, soy el contenido!'/>
    <FunctionCounter />
    
    </>
  );
}

export default App;
