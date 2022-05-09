import { Link } from "react-router-dom"

const BtnListCont = () => {
    return (
        <div className="mb-3">
            <Link to="/">
                <button className="fw-bold btn btn-primary">
                    Seguir Comprando
                </button>
            </Link>
        </div>
    )
}

export default BtnListCont