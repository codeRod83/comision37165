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
        <>
            {
                btnType === "count" ?
                    <BtnCount seteaBtn={seteaBtn} countInicial={1} stock={producto.stock} producto={producto} />
                    :
                    <>
                        <div className="row align-items-center me-3">
                            <BtnListCont />
                            <BtnCart />
                        </div>
                    </>
            }
        </>
    )
}

export default ItemCount;