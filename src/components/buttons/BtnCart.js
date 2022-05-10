import { Link } from "react-router-dom"

const BtnListCont = () => {
    return (
        <>
            <Link to="../cart">
                <button className="fw-bold btn btn-warning text-style ">
                    Ir al Carrito
                </button>
            </Link>
        </>
    )
}

export default BtnListCont