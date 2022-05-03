import React from 'react'
import Item from './Item'

const ItemDetail = (props) => {
    const producto = props.producto
    // console.log(producto)
    return (
        <>
            <Item key={producto.id} producto={producto} detalle={ producto.descripcion } />
        </>
    )
}

export default ItemDetail