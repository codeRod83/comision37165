import { useEffect, useState } from "react"
import BtnCount from "./buttons/BtnCount"
import BtnListCont from "./buttons/BtnListCont"
import BtnCart from "./buttons/BtnCart"
import { useCartContext } from "../context/cartContext"

const ItemCount = ({ producto }) => {
    
    const [btnType, setBtnType] = useState("btncount")
    const [stock, setStock] = useState(1)
    const { cartList } = useCartContext()
    
    useEffect(() => {
        const idx = cartList.findIndex(prod => producto.id === prod.id)
        
        if (idx !== -1) {
            setStock(producto.cantidad - cartList[idx].cantidad)
        } else {
            setStock(producto.cantidad)
        }
    }, [])
    

    const seteaBtn = () => {
        setBtnType("cart")
    }

    
    

    return (
        <>
            {
                btnType === "btncount" ?
                    <BtnCount seteaBtn={ seteaBtn } countInicial={1} stock={stock} producto={producto} />
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