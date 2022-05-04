import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { traeProductos } from '../data/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {
   
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState([])
  const { detalleId } = useParams()
  
  useEffect(() => {
    traeProductos
      .then( resultado => setProducto(resultado.find(item => item.id === detalleId)) )
      .catch( error => console.log(error))
      .finally(() => setCargando(false))
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
export default ItemDetailContainer