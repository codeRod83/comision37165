import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { Spinner } from 'reactstrap'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {
  
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoriaId } = useParams()
  let titulo = 'Productos'

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      
      getDocs(queryFilter)
        .then(resultado => setProductos(resultado.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
    } else {
      getDocs(queryCollection)
        .then(resultado => setProductos( resultado.docs.map(item => ({ id: item.id, ...item.data() }) ) ))
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
    }
  }, [categoriaId])
    
  if (categoriaId) {
    titulo = categoriaId
  }
  
  if (cargando) {
    return (
      <div className="container mt-5 text-center">
        <Spinner color="primary" />
        <p>Cargando ...</p>
      </div>
    )
  }
  return (
    <div className="container mt-5 text-center">
      <h1 className='fw-bold main__titulo'>
        {props.name}
      </h1>
      <h3>
        ¡ Bienvenido a nuestro catalogo de {titulo} !
      </h3>
      <div className="row gap-4 justify-content-center justify-content-sm-center justify-content-md-evenly card-group mt-5">
        <ItemList productos={ productos } />
      </div>
    </div>
  )
}

export default ItemListContainer