import React, { memo } from 'react'
import Item from './Item'

const ItemList =
    memo(
        ({ productos }) => {
            return (
                <>
                    {productos.map((producto) =>
                        <Item key={producto.id} producto={producto} costo={producto.costo} />
                    )}
                </>
            )
        }
    )

export default ItemList