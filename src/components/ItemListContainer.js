import React, { useState, useEffect } from 'react'
import { listaProductos } from '../data/data'
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  
  const traeProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaProductos)
    }, 2000)
  })
  
  const traeProductosdeData = async () => {
    try {
      const resultado = await traeProductos
      setCargando(false)
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
  
  if (cargando) {
    return (
      <p>Cargando...</p>
    )
  }
  return ( 
      <div className="container mt-5 text-center">
        <h3>
          ¡ Bienvenido al catalogo de {props.name} !
      </h3>
      <div className="row gap-4 justify-content-center justify-content-sm-center justify-content-md-evenly card-group">
        <ItemList productos={productos} />
      </div>
      </div>
      )
}
export default ItemListContainer;