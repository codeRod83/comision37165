import {  useState } from "react"
import { useCartContext } from "../../context/cartContext"


const BtnCount = ({ producto, countInicial, stock, seteaBtn }) => {

    const [cant, setCant] = useState(countInicial)
    const { addToCart } = useCartContext()
    
    const cambiaCant = (numero) => {
        setCant(cant + numero)
    }

    
    const onAdd = (cant) => {
        addToCart({ ...producto, cantidad: cant, stock })
        seteaBtn()
    }
    
    return (
        <div className="itemCount row align-items-center card-text text-center mb-4 me-xl-3">
            <div className="d-grid gap-1 d-flex justify-content-center mt-3">
                <button
                    className="itemCount__btn btn btn-outline-primary"
                    onClick={() => cambiaCant(-1)}
                    disabled={cant <= 1}
                >
                    -
                </button>
                <button className="fw-bold btn btn-outline-primary disabled">{cant}</button>
                <button
                    className="itemCount__btn btn btn-outline-primary text-center"
                    onClick={() => cambiaCant(1)}
                    disabled={cant >= stock}
                >
                    +
                </button>
            </div>
            <div className="container mt-3 text-center">
                <button
                    className="fw-bold btn btn-warning text-style"
                    onClick={() => onAdd(cant) }
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default BtnCount