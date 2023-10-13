import React from "react";
import "../stylesheets/Boton.css";

function Boton({ texto, estadoBoton, manejarClic }) {
  return <button 
    className={estadoBoton ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
        {texto}
    </button>;
}

export default Boton;
