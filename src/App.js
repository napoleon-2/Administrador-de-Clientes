import React, {Fragment, useState}  from 'react'
import Formulario from './components/Formulario';

function App() {
  //arreglo de turno
  const [turnos, guardarTurnos] = useState([]);
  //funcio que toma las citas actuales y agrega la nueva
  const crearTurno = turno => {
    guardarTurnos([
      ...turnos,
      turno
    ])
  }
  return (
    <Fragment>
      <h1>Administrador de clientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
               crearTurno={crearTurno}
               />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
