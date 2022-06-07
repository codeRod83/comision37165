import { Link } from "react-router-dom"

const BtnListCont = () => {
    return (
        <div>
            <Link to="/">
                <button className="btn__ListContainer fw-bold text-style">
                    Seguir Comprando
                </button>
            </Link>
        </div>
    )
}

export default BtnListCont