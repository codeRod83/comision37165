import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    const productos = props.productos
    
    return (    
        <>
            {productos.map((producto) => 
                    <Item key={producto.id} producto={producto}/>
            )}
        </>
    )
}

export default ItemList