import React from 'react'
import Item from './Item'


const ItemList = ( {productos} ) => {
        
    return (    
        <>
            {productos.map((producto) => 
                <Item key={producto.id} producto={producto} costo={producto.costo} stock={producto.cantidad}/>
            )}
        </>
    )
}

export default ItemList