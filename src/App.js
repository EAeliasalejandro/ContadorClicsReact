import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logotipoContador from './img/logo.jpg';
//Este es un gancho para usar estados en funciones
import { useState } from 'react';

function App() {
  //[Estado de componente, setter] = valor inicial
  const [numClics, setNumClics] = useState(0);


  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logotipoContador}
          alt='logo de contador'
        />
      </div>
      <div className='contendor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
