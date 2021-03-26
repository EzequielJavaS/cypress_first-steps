
import React from 'react'

export const Alerta = ({alerta}) => {
    if(!alerta) return null;

    return (
        <div data-cy="alerta" className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
    )
}

export default Alerta;
