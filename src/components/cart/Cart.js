import BtnListCont from "../buttons/BtnListCont"
import { useCartContext } from "../../context/cartContext"

const Cart = () => { 

    const { cartList, removeFromCart, clearCart, cartTotal } = useCartContext()
    return (
        <>
            <div className="container text-center mt-5">
                <h1>Carrito de Compras</h1>
            </div>
            {cartList.map((producto) => (
                <div key={producto.id} className="container cart" >
                    <div className="row gap-3">
                        <div className="col d-flex flex-column flex-xl-row justify-content-around gap-1 itemDetail__container align-items-center my-5">
                            <div className="d-flex justify-content-center">
                                <img src={producto.imagen}
                                    className="card__image--cart card-img-top"
                                    alt="Foto del producto"
                                />
                            </div>
                            <div className="card__body mx-2">
                                <p className="row align-items-center card-text text-center mb-4">
                                    <span className="fw-bold fs-4 text-style__title mb-2">Producto</span>
                                    <span className="fw-bold fs-5 detalle__text text-capitalize">{producto.nombre}</span>
                                </p>
                                <p className="row align-items-center card-text text-center mb-4">
                                    <span className="fw-bold fs-4 text-style__title mb-2">Cantidad</span>
                                    <span className="fw-bold fs-5">{producto.cantidad}</span>
                                </p>
                                <p className="row align-items-center card-text text-center mb-xxl-1 mx-3">
                                    <span className="fw-bold fs-4 text-style__title mb-2">Costo</span>
                                    <span className="fw-bold fs-4 text-nowrap"> $ {(producto.costo) * (producto.cantidad)}.00</span>
                                </p>
                            </div>
                            <div className="d-flex justify-content-center text-center ms-xl-4 my-4">
                                <span
                                    className="material-icons card__icon--delete"
                                    onClick={() => removeFromCart(producto)}
                                >
                                    delete_sweep
                                </span>
                            </div>
                        </div>
                    </div>
                </div>))
            }
            {
                cartList.length > 0 ? 
                    <div className="d-flex flex-column justify-content-center my-5">
                        <div className="text-center mb-2 card__icon mx-auto">
                            <span
                                className="material-icons card__icon--clean"
                                onClick={clearCart}
                            >
                                remove_shopping_cart
                            </span>
                            <p>Vaciar Carrito</p>
                        </div>
                        <div className="d-flex flex-row gap-5 align-items-center mx-auto">
                            <div className="d-flex flex-row gap-3 align-items-center ">
                                <h2 className="$font-1 text-primary">TOTAL : </h2>
                                <span className="text-style__title fw-bold fs-3">$ {cartTotal}.00</span>
                            </div>
                            <div className="col d-flex flex-row gap-5 align-items-center my-5">
                                <BtnListCont />
                                <button className="btn btn-outline-primary">Terminar Compra</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d-flex flex-column justify-content-center gap-5 my-5 text-center">
                        <h3 className="text-style__title--2">No hay Productos</h3>
                        <BtnListCont />
                    </div>
                    }
        </>
    )
}

export default Cart