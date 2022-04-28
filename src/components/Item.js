import ItemCount from "./ItemCount"


const Item = ({ id, nombre, marca, costo, cantidad, thumbnailUrl }) => {
    const onAdd = (count) => {
        alert(` Se agregaron ${count}\n ${nombre} \n al Carrito`);
    }

    return (
        <div>
            <img src={thumbnailUrl} className="card__image card-img-top" alt="Foto del producto" />
            <div className="card__body">
                <h2 className="card-title text-center">{nombre}</h2>
                <h3 className="card-text text-center">
                    <span className="font-weight-bold">Marca:</span> {marca}
                </h3>
                <h4 className="card-text text-center">
                    <span className="font-weight-bold">Costo:</span> {costo}
                </h4>
                <p className="card-text text-center">
                    <span className="font-weight-bold">Cantidad:</span> {cantidad}
                </p>
            </div>
            <div className="container mt-3 text-center gap-2">
                <button className="btn btn-warning">
                Detalles
                </button>
            </div>
            <div className="d-grid row align-items-end my-3">
                <ItemCount stock={cantidad} onAdd={onAdd} countInicial={1} />
            </div>
        </div>
        
    );
}

export default Item