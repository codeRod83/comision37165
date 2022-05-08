import { Link } from 'react-router-dom';

const Item = ({ producto, detalle }) => {
    return (
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
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-warning">
                        Ver Detalle
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item