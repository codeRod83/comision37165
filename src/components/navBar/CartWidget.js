import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"


const CartWidget = () => {
    const { cartCount } = useCartContext()
    return (
        <NavLink
            className="header__cartWidget d-flex gap-1 align-items-center text-decoration-none py-1 mx-5"
            to="/Cart" >
            <span className="material-icons">
                shopping_cart
            </span>
            {
                cartCount > 0 ?
                    <span className="header__cartWidget--cantidad fs-5 fw-bold">
                        {cartCount}
                    </span>
                    :
                    <span className="header__cartWidget--cantidad fs-5 fw-bold">
                        
                    </span>
            }
        </NavLink>
    )
}
export default CartWidget