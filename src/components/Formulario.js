import React, { Fragment } from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear Turno </h2>
            <form>
                <label>Nombre del Producto</label>
                <input
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre Producto"
                />
                <label>Nombre del Cliente</label>
                <input
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre Cliente"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    placeholder="Nombre Cliente"
                />
                <label>Hora de entrega</label>
                <input
                    type="time"
                    name="cliente"
                    className="u-full-width"
                    
                />
                <label>Descripcion</label>
                <textarea 
                    className="u-full-width"
                    name="Descripcion"
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