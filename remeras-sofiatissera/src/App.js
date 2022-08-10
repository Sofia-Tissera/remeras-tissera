import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer saludo='Hola estoy viendo que hace este coso :v'/>
    </>
  );
}

export default App;
