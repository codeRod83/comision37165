import { useState } from "react"
import BtnCount from "./buttons/BtnCount"
import BtnListCont from "./buttons/BtnListCont"
import BtnCart from "./buttons/BtnCart"

const ItemCount = ({ producto }) => {
    
    const [btnType, setBtnType] = useState("count")

    const seteaBtn = () => {
        setBtnType("cart")
    }

    return (
        <div className="container itemCount-container">
            {
                btnType === "count" ?
                    <BtnCount seteaBtn={seteaBtn} countInicial={1} stock={producto.stock} producto={producto} />
                    :
                    <>
                        <BtnListCont />
                        <BtnCart />
                    </>
            }
        </div>
    )
}

export default ItemCount;