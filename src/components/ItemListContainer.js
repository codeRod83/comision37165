import { traeProductos } from '../data/data'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoriaId } = useParams()
  let titulo = 'Productos'

  useEffect(() => {
    if (categoriaId) {
      traeProductos
        .then(resultado => setProductos(resultado.filter(item => item.categoria === categoriaId)))
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
    } else {
      traeProductos
        .then(resultado => setProductos(resultado))
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
    }
  }, [categoriaId])
    
  if (categoriaId) {
    titulo = categoriaId
  }
  
  if (cargando) {
    return (
      <p className='container text-center'>Cargando...</p>
    )
  }
  return ( 
    <div className="container mt-5 text-center">
      <h1 className='main__titulo'>
      {props.name}
      </h1>
        <h3>
        ¡ Bienvenido a nuestro catalogo de { titulo } !
      </h3>
      <div className="row gap-4 justify-content-center justify-content-sm-center justify-content-md-evenly card-group mt-5">
        <ItemList productos={productos} />
      </div>
      </div>
      )
}
export default ItemListContainer