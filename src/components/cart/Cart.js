import BtnListCont from "../buttons/BtnListCont"
import { useCartContext } from "../../context/cartContext"

const Cart = () => { 

    const { cartList, removeFromCart, clearCart, cartTotal, genOrder } = useCartContext()
    return (
        <>
            <div className="cart__titulo container text-center mt-5">
                <h1>Carrito de Compras</h1>
            </div>
            {cartList.length > 0 ?
                <div>
                    <div className="cart__container mx-5 my-5">
                        {cartList.map((producto) => (
                            <div key={producto.id} className="container">
                                <div className="row">
                                    <div className="col d-flex flex-column flex-xl-row justify-content-around gap-1 itemDetail__container align-items-center my-5 mx-3">
                                        <div className="d-flex justify-content-center cart__image">
                                            <img src={producto.imagen}
                                                className="card-img-top"
                                                alt="Foto del producto"
                                            />
                                        </div>
                                        <div className="card__body mx-1">
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
                                                className="material-icons cart__icon--delete"
                                                onClick={() => removeFromCart(producto)}
                                            >
                                                delete_sweep
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>))
                        }
                        <div className="d-flex flex-column justify-content-center my-5">
                            <div
                                className="text-center px-2 mx-auto cart__icon--clear"
                                onClick={clearCart}
                            >
                                <span
                                    className="material-icons "
                                >
                                    remove_shopping_cart
                                </span>
                                <p>Vaciar Carrito</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mx-5">
                        <div className="container my-5">
                            <div className="d-flex flex-column justify-content-center my-5">
                                <div className="cart__total d-flex row justify-content-center align-items-center gap-3 py-3">
                                    <div className="input-group gap-3">
                                        <span className="input-group-text">Nombre Completo</span>
                                        <input type="text" aria-label="First name" className="form-control" placeholder="Nombre y Apellido" />
                                    </div>
                                    <div className="input-group gap-3">
                                        <span className="input-group-text">Correo Electronico</span>
                                        <input type="email" aria-label="Email" className="form-control" placeholder="@mail" />
                                    </div>
                                    <div className="input-group gap-3">
                                        <span className="input-group-text">Telefono</span>
                                        <input type="phone" aria-label="Phone" className="form-control" placeholder="Telefono" />
                                    </div>
                                    <div className="text-center d-flex flex-column flex-xl-row gap-5 justify-content-around align-items-center mt-5 py-2">
                                        <div className="d-flex flex-row gap-4 align-items-center">
                                            <h2 className="$font-1 text-primary">TOTAL : </h2>
                                            <span className="text-style__title fw-bold fs-3">$ {cartTotal}.00</span>
                                        </div>
                                        <BtnListCont />
                                        <button className="btn__Cart" onClick={genOrder}>Terminar Compra</button>
                                    </div>
                                </div>
                            </div>
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