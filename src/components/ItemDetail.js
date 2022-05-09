import React from 'react'

const ItemDetail = (props) => {
    const producto = props.producto
    
    return (
        <>
            <div className="row align-items-start">
                <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            </div>
            <div className="card__body mx-2">
                <p className="row align-items-center card-text text-center">
                    <span className="fw-bold mb-2">Marca:</span>
                    <span>{producto.marca}</span>
                </p>
                <p className="row align-items-center card-text text-center">
                    <span className="fw-bold mb-2">Descripcion : </span>
                    <span>{producto.descripcion}</span>
                </p>
            </div>
            <div className="row gap-4 align-items-center text-center">
                <p className="row align-items-center card-text text-center">
                    <span className="fs-3 fw-bold">Costo</span>
                    <span className="fs-5">$ {producto.costo}.00</span>
                </p>
                <p className="row align-items-center card-text text-center">
                    <span className="fs-3 fw-bold">Cantidad</span>
                    <span className="fs-5">{producto.cantidad}</span>
                </p>
            </div>
        </>
    )
}

export default ItemDetail