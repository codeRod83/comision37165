import { useState } from "react"
import BtnCount from "./buttons/BtnCount"
import BtnListCont from "./buttons/BtnListCont"
import BtnCart from "./buttons/BtnCart"
// import { useCartContext } from "../context/cartContext"

const ItemCount = ({ producto }) => {
    
    const [btnType, setBtnType] = useState("btncount")

    
    const seteaBtn = () => {
        setBtnType("cart")
    }

    return (
        <>
            {
                btnType === "btncount" ?
                    <BtnCount seteaBtn={seteaBtn} countInicial={1} stock={producto.cantidad} producto={producto} />
                    :
                    <div className="row align-items-center me-3">
                        <BtnListCont />
                        <BtnCart />
                    </div>
            }
        </>
    )
}

export default ItemCount;