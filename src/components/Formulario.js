import React, { Fragment, useState } from 'react';

const Formulario = () => {
    //crear state de cliente
    const [turno, actualizarTurno] = useState({
        producto: '',
        cliente: '',
        fecha: '',
        hora: '',
        descripcion: ''
    });

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
        //asignar un id
        //crear turno
        //reiniciar el form
    }

    return ( 
        <Fragment>
            <h2>Crear Turno </h2>
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
                    name="Descripcion"
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
 
export default Formulario;