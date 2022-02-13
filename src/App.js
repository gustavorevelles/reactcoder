import './App.css';
import Navbar from './components/NavBar/navbar.js';
//import Navbar from 'react-bootstrap/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar title="ecommerce" />
    </div>
    <ItemListContainer greeting='Material de nieve y montaña'/>
    
    
    </>
  );
}

export default App;
