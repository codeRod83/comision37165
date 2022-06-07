import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState({})
  const { detalleId } = useParams()
  
  
  useEffect(() => {
    const querydb = getFirestore()
    const queryProd = doc(querydb, `productos/${detalleId}`)

    getDoc(queryProd)
      .then(resultado => setProducto({ id: resultado.id, ...resultado.data() }))
      .catch(error => console.log(error))
      .finally(() => setCargando(false))
  }, [detalleId])

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
        <ItemCount producto={producto} />
      </div>
    </div>
  )
}

export default ItemDetailContainer