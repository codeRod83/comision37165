import { useState } from "react"

const BtnCount = ({ seteaBtn, countInicial, stock, producto }) => {

    const [count, setCount] = useState(countInicial)
    
    const cambiaCount = (numero) => {
        setCount(count + numero)
    }
    
    const onAdd = (count) => {
        alert(` Se agregaron ${count}\n ${producto.nombre} \n al Carrito`)
        seteaBtn()
    }
    
    return (
        <div className="row align-items-center card-text text-center itemCount-container me-3">
            <div className="container mt-3">
                <button
                    className="btn btn-info"
                    onClick={() => cambiaCount(-1)}
                    disabled={count <= 1}
                >
                    -
                </button>
                <button className="btn btn-light">{count}</button>
                <button
                    className="btn btn-info"
                    onClick={() => cambiaCount(1)}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <div className="container mt-3 text-center">
                <button
                    className="fw-bold btn btn-warning text-style"
                    onClick={onAdd}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default BtnCount