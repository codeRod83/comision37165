import React from 'react'
// import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const producto = props.producto
    // console.log(producto)

    return (
        <>
            <div className="row align-items-start">
                <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            </div>
            <div className="card__body mx-2">
                <h2 className="card-title text-center">{producto.nombre}</h2><p className="my-5 card-text text-center">
                    <span className="fw-bold">Marca:</span> {producto.marca}
                </p>
                <p>
                    <span className="fw-bold">Descripcion : </span> {producto.descripcion}
                </p>
            </div>
            <div className="row align-items-end">
                <h4 className="row align-items-center card-text text-center">
                    <span className="fw-bold">Costo:</span> {producto.costo}
                </h4>
                <p className="row align-items-center card-text text-center">
                    <span className="fw-bold">Cantidad:</span> {producto.cantidad}
                </p>
            </div>
        </>
    )
}

export default ItemDetail