import React from 'react'

const ItemDetail = ( {producto} ) => {
    
    return (
        <>
            <div className="d-flex flex-column flex-xl-row align-items-center gap-3 my-4">
                <div className="row align-items-start ms-xl-2 card__image--detail ">
                    <img src={producto.imagen} className="card-img-top" alt="Foto del producto" />
                </div>
                <div className="card__body mx-2">
                    <p className="row align-items-center card-text text-center">
                        <span className="fw-bold fs-4 text-style__title mb-2">Marca</span>
                        <span className="fw-bold fs-5">{producto.marca}</span>
                    </p>
                    <p className="container row align-items-center card-text text-center">
                        <span className="fw-bold fs-4 text-style__title mb-2">Descripcion</span>
                        <span className="fw-normal fs-5 detalle__text px-5">{producto.descripcion}</span>
                    </p>
                </div>
                <div className="row gap-2 align-items-center text-center">
                    <p className="row align-items-center card-text text-center">
                        <span className="fw-bold fs-4 text-style__title mb-2">Cantidad</span>
                        <span className="fw-bold fs-5">{producto.cantidad}</span>
                    </p>
                    <p className="row align-items-center card-text text-center">
                        <span className="fw-bold fs-4 text-style__title mb-2">Costo</span>
                        <span className="fw-normal fs-4 text-nowrap"> $ {producto.costo}.00</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail