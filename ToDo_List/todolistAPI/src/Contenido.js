import React from 'react'

export default ({ label, id, deleteMensaje }) => (
    <>
        <div className='contenido'>
            <div className='row'>
                <p className='textlist col-11'>
                   {id} {label} 
                </p>
                <p className='button col-1' onClick={(e) => deleteMensaje(id)}> X </p>
            </div>
        </div>
    </>
)