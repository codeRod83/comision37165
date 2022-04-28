import { useState } from "react"

const ItemCount = ({ countInicial, stock, onAdd }) => { 
    
    const [count, setCount] = useState(countInicial);
    
    const cambiaCount = (numero) => {
        setCount(count + numero);
    }
    
    return (    <div>
        <div className="container mt-3 text-center">
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
                className="btn btn-primary"
                onClick={() => onAdd(count)}
            >
                Agregar al Carrito
            </button>
        </div>
    </div>
        )
    }

export default ItemCount;