import React from 'react';

const Turno = ({turno, eliminarTurno}) => (
    <div className="cita">
        <p>Producto: <span>{turno.producto}</span> </p>
        <p>Cliente: <span>{turno.cliente}</span> </p>
        <p>Fecha: <span>{turno.fecha}</span> </p>
        <p>Hora: <span>{turno.hora}</span> </p>
        <p>Descripcion: <span>{turno.descripcion}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarTurno(turno.id)}
            >Eliminar &times;</button>
    </div>
     );

 
export default Turno;