import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearTurno}) => {
    //crear state de cliente
    const [turno, actualizarTurno] = useState({
        producto: '',
        cliente: '',
        fecha: '',
        hora: '',
        descripcion: ''
    });

    const [error, actualizarError] = useState(false)

    //funcion que se ejecuta cuando el usario escribe en un imput
    const actualizarState = e => {
        actualizarTurno({
            ...turno,
            [e.target.name] : e.target.value
        })
        
    }
    //extraer los valores
    const {producto, cliente, fecha, hora, descripcion} = turno;
    //cuando el usuario precione se agrega el turno
    const submitTurno = e => {
        e.preventDefault();
        
        //validar
        if(producto.trim() === '' || cliente.trim() === ''  
            || fecha.trim() === '' || hora.trim() === '' 
            || descripcion.trim() === ''){
            actualizarError(true);
            return;
        }
        //eliminar mensaje de error
        actualizarError(false);
        //asignar un id
        turno.id = uuidv4 ();
        //crear turno
        crearTurno(turno);
        //reiniciar el form
        actualizarTurno({
            producto: '',
            cliente: '',
            fecha: '',
            hora: '',
            descripcion: ''
        })
    }

    
    return ( 
        <Fragment>
            <h2>Crear Turno </h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
            : null}
            <form
                onSubmit={submitTurno}
            >
                <label>Nombre del Producto</label>
                <input
                    type="text"
                    name="producto"
                    className="u-full-width"
                    placeholder="Nombre Producto"
                    onChange={actualizarState}
                    value={producto}
                />
                <label>Nombre del Cliente</label>
                <input
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre Cliente"
                    onChange={actualizarState}
                    value={cliente}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    placeholder="Nombre Cliente"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora de entrega</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Descripcion</label>
                <textarea 
                    
                    className="u-full-width"
                    name="descripcion"
                    placeholder="descripcion …"
                    id="Descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Turno        
                </button>
            </form>
        </Fragment>
    );
}
 
Formulario.propTypes = {
    crearTurno: PropTypes.func.isRequired
}
export default Formulario;