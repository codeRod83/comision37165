import ItemCount from './ItemCount'
const Item = ({ producto, detalle }) => {
    const onAdd = (count) => {
        alert(` Se agregaron ${count}\n ${producto.nombre} \n al Carrito`);
    }
    
    // const muestraDetalle = () => {
    //     let id = producto.id
    //     return id
    // }
    
    if (detalle) {
        return (
            <div className="d-flex flex-row gap-5 card__container-detail align-items-center">
                <div className="row align-items-start">
                    <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
                </div>
                <div className="card__body ">
                    <h2 className="card-title text-center">{producto.nombre}</h2>
                    <p className="my-5 card-text text-center">
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
                    <div className="d-grid row align-items-end my-3">
                        <ItemCount stock={producto.cantidad} onAdd={onAdd} countInicial={1} />
                    </div>
                </div>
            </div>
        );
    } return (
        <div className="me-4 col-8 col-md-6 col-lg-5 col-xxl-4 mx-xxl-1 my-4 card__container">
            <div>
                <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            </div>
            <div className="card__body">
                <h2 className="card-title text-center">{producto.nombre}</h2>
                <p className="card-text text-center">
                    <span className="font-weight-bold">Cantidad:</span> {producto.cantidad}
                </p>
            </div>
            <div className="container mt-3 text-center gap-2 mb-4">
                <button
                    className="btn btn-warning"
                    // onClick={muestraDetalle}
                >
                    Detalles
                </button>
            </div>
        </div>
    )
}

export default Item