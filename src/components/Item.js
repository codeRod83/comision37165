import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="me-4 col-8 col-md-6 col-lg-5 col-xxl-4 mx-xxl-1 my-4 card__container">
            <div>
                <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            </div>
            <div className="card__body">
                <h2 className="card-title text-capitalize text-center fs-5">{producto.nombre}</h2>
                <p className="row align-items-center card-text text-center">
                    <span className="fs-4 fw-bold mt-3">Cantidad:</span>
                    <span className="fs-5">{producto.cantidad}</span>
                </p>
            </div>
            <div className="container mt-3 text-center gap-2 mb-4">
                <Link to={`/detalle/${producto.id}`}>
                    <button className="fw-bold btn btn-warning">
                        Detalles
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item