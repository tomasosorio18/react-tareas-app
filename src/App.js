import './App.css';
import logo from './images/logo.ico'
import ListaTareas from './components/ListaTareas'
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaTareas />
      </div>
    </div>
  );
}

export default App;
