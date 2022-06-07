import { Link } from "react-router-dom"

const BtnListCont = () => {
    return (
        <>
            <Link to="../cart">
                <button className="btn__Cart fw-bold text-style ">
                    Ir al Carrito
                </button>
            </Link>
        </>
    )
}

export default BtnListCont