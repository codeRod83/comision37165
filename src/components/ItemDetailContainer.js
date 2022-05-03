import React, { useState, useEffect } from 'react'
import { listaProductos } from '../data/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {
  
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState([])
  
  const traeProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaProductos)
      }, 2000)
  })
  
  const traeProductodeData = async () => {
    try {
      const resultado = await traeProducto
      const productoDetalle = listaProductos.find((producto) => {
        return producto.id === 2
      })
      setCargando(false)
      setProducto(productoDetalle)
    }
    catch (error) {
      console.log(error)
      alert('Los productos no se pudieron cargar')
    }
  }
  
  useEffect(() => {
    traeProductodeData()
  }, [])

  if (cargando) {
    return (
      <p></p>
    )
  }
    
    return ( <div className="container mt-5 text-center">
        <h3>
            ¡ Detalle de Producto {props.name} !
        </h3>
        <div className="my-5">
        <ItemDetail producto={producto} />
      </div>
    </div>
    )
}
export default ItemDetailContainer;