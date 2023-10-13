import "./App.css";
import logo from "./imgs/logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react"; /* nos permite los hooks trabajar con estados o funciones */

function App() {
  /* Cuando la pagina tiene interactividad, aqui se debe definir las funciones */
  const [numClics, setNumClics] =
    useState(
      0
    ); /* en donde esta el 0 es el valor inicial al que se va a reiniciar siempre */

  const manejarClic = () => {
    console.log("Me clickeaste");
    setNumClics(
      numClics + 1
    ); /* aqui se esta diciendo que cada vez que se de clic, se sume 1 */
  };
  const reiniciarContador = () => {
    console.log("Me reiniciaste");
    setNumClics(
      0
    ); /* aqui se esta diciendo que cada vez que se de clic, se reinicie a 0 */
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo de Freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto="Incrementar"
          estadoBoton={true}
          manejarClic={manejarClic}
        />

        <Boton
          texto="Reiniciar"
          estadoBoton={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
