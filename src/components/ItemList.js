import React, { useState, useEffect } from 'react'
import Item from './Item'
import { listaProductos } from '../data/data'

const ItemList = () => {
    const [productos, setProductos] = useState([])

    const traeProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 2000)
    })

    const traeProductosdeData = async () => {
        try {
            const resultado = await traeProductos
            setProductos(resultado)
        }
        catch (error) {
            console.log(error)
            alert('Los productos no se pudieron cargar')
        }
    }
    useEffect(() => {
        traeProductosdeData()
    }, [])

    return (    <div className="row gap-4 justify-content-center justify-content-sm-center justify-content-md-evenly card-group">
            {productos.map((producto) => {
                return (
                    <div className="me-4 col-8 col-md-6 col-lg-5 col-xxl-4 mx-xxl-1 my-4 card__container"
                        key={producto.id}>
                        <Item
                            id={producto.id}
                            nombre={producto.nombre}
                            marca={producto.marca}
                            costo={producto.costo}
                            cantidad={producto.cantidad}
                            thumbnailUrl={producto.thumbnailUrl}
                        />
                    </div>
                )
            })}
                </div>
    )
}

export default ItemList