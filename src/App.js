import logo from './logo.svg';
import './App.css';
import Nav from './componentes/Nav';
import { useState } from 'react';
import { Cards } from './componentes/Cards';

function App() {

  const[mostrar, setMostrar] = useState({
    mostrarTodos: true,
    mostrarRol:false,
    mostrarPosicion:false,
    mostrarAnadir:false
  });

  return (
    <>
    <Nav mostrar={setMostrar}/>
    {mostrar.mostrarTodos && (
      <div className="row">
      <Cards/>
      </div>
    )}
    </>
  )}

export default App;
