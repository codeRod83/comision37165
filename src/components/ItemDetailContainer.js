import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { traeProductos } from '../data/data'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { Spinner } from 'reactstrap'

const ItemDetailContainer = () => {

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
      <div className="container mt-5 text-center">
        <Spinner color="warning" />
        <p>Cargando ...</p>
      </div>
    )
  }
    // const stock = producto.cantidad
  
    
  return (
    <div className="itemDetail mt-5 text-center">
      <h3 className='fw-bold text-uppercase itemDetail__titulo'>
        {producto.nombre}
      </h3>
      <div className="d-flex itemDetail__container my-5">
        <ItemDetail producto={producto} />
        <ItemCount producto={producto} stock= {producto.cantidad} />
      </div>
    </div>
  )
}

export default ItemDetailContainer