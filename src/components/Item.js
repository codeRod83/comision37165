import { Link } from 'react-router-dom';

const Item = ({ producto, stock, costo }) => {
    return (
        <div className="me-4 col-8 col-md-6 col-lg-5 col-xxl-4 mx-xxl-1 my-4 card__container">
            <div>
                <img src={producto.thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            </div>
            <div className="card__body">
                <h2 className="card-title text-capitalize text-center fs-5">{producto.nombre}</h2>
                <p className="row align-items-center card-text text-center">
                    <span className="fs-4 text-style__title fw-bold mt-3">Costo</span>
                    <span className="fw-bold fs-5">$ {costo}.00</span>
                </p>
            </div>
            <div className="container text-center gap-2 my-4">
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