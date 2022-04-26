import { useState } from "react"

const ItemCount = ({ }) => { 
    const countInicial = 1
    const stock = 10
    const [count, setCount] = useState(countInicial);
    
    const cambiaCount = (numero) => {
        setCount(count + numero);
    }
    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`);
    }
        return (
            <>
                <div className="container mt-5 text-center">
                    <button
                        onClick={() => cambiaCount(-1)}
                        disabled={count <= 1}
                    >
                        -
                    </button>
                    <button className="btn btn-light">{count}</button>
                    <button
                        onClick={() => cambiaCount(1)}
                        disabled={count >= stock}
                    >
                        +
                    </button>
                </div>
                <div className="container mt-5 text-center">
                    <button
                        onClick={() => onAdd(count)}
                    >
                        Agregar al Carrito
                    </button>
                </div>
                </>
        )
    }

export default ItemCount;