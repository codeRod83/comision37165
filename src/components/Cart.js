import { useCartContext } from "../context/cartContext"

const Cart = () => { 

    const { cartList, removeFromCart, clearCart } = useCartContext()
    return (
        <>
            <div className="container text-center mt-5">
                <h1>Carrito de Compras</h1>
            </div>
            {cartList.map((producto) => (
                <div key={producto.id}>
                    <div className="itemDetail__container d-flex flex-column flex-xl-row gap-3 align-items-center my-5 justify-content-between">
                        <div className="row align-items-start  ms-xl-2">
                            <img src={producto.thumbnailUrl}
                                className="card__image card-img-top"
                                alt="Foto del producto"
                                onClick={() => removeFromCart(producto)}
                            />
                        </div>
                        <div className="card__body mx-5">
                            <p className="row align-items-center card-text text-center mb-5">
                                <span className="fw-bold fs-4 text-style__title mb-2">Producto</span>
                                <span className="fw-bold fs-5 detalle__text px-5 text-capitalize">{producto.nombre}</span>
                            </p>
                            <p className="row align-items-center card-text text-center">
                                <span className="fw-bold fs-4 text-style__title mb-2">Marca</span>
                                <span className="fw-bold fs-5">{producto.marca}</span>
                            </p>
                        </div>
                        <div className="row gap-2 align-items-end text-center">
                            <p className="row align-items-center card-text text-center mb-5">
                                <span className="fw-bold fs-4 text-style__title mb-2">Cantidad</span>
                                <span className="fw-bold fs-5">{producto.cantidad}</span>
                            </p>
                            <p className="row align-items-center card-text text-center mb-xxl-1 mb-3">
                                <span className="fw-bold fs-4 text-style__title mb-2">Costo</span>
                                <span className="fw-normal fs-4 text-nowrap"> $ {(producto.costo) * (producto.cantidad)}.00</span>
                            </p>
                        </div>
                    </div>
                </div>))
            }
            <div className="d-grid d-xs-block justify-content-center my-3">
                <button
                    className="btn col-12 btn-outline-danger"
                    onClick={clearCart}>
                    Vaciar Carrito
                </button>
            </div>
        </>
    )
}

export default Cart