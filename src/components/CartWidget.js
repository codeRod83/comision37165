import { NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <NavLink to="/Cart" >
            <span className="material-icons">
                shopping_cart
            </span>
        </NavLink>
    )
}
export default CartWidget