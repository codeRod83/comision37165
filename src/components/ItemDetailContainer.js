import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { traeProductos } from '../data/data'
import ItemCount from './ItemCount'
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
    
  return (
    <div className="container itemDetail mt-5 text-center">
      <h3 className='fw-bold text-uppercase itemDetail__titulo'>
        {producto.nombre}
      </h3>
      <div className="d-flex flex-column flex-xl-row gap-3 itemDetail__container align-items-center my-5">
        <ItemDetail producto={producto} />
        <ItemCount producto={producto} />
      </div>
    </div>
  )
}

export default ItemDetailContainer