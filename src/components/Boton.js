import React from 'react';
import '../styleSheets/Boton.css'
//este prop es destructurado
function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button 
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} 
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;