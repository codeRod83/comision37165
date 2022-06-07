import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    
    const buyer = { name: "Rodrigo Floreschapa", email: "rodrfd@gmail.com", phone: "3123123123" }
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    
    const muestraId = (id) => {
        Swal.fire("Se genero la orden con el id:", `${id}`, "success")
    }
        
    const addToCart = (producto) => {
        const idx = cartList.findIndex(prod => producto.id === prod.id)
        
        if (idx !== -1) {
            const newCartList = cartList
            newCartList[idx].cantidad += producto.cantidad
            setCartList([...newCartList])
            totalCost(cartList)
            cartCant(cartList)
        } else {
            setCartList([...cartList, producto])
            totalCost([...cartList, producto])
            cartCant([...cartList, producto])
            
        }
    }
    const cartCant = (props) => {
        setCartCount(props.reduce((acc, curr) => acc + (curr.cantidad), 0))
    }
    const totalCost = (props) => {
        setCartTotal(props.reduce((acc, curr) => acc + (curr.cantidad * curr.costo), 0))
    }
    const removeFromCart = (producto) => {
        const newCartList = cartList.filter(prod => prod.id !== producto.id)
        cartCant(newCartList)
        setCartList([...newCartList])
        totalCost(newCartList)
    }
    const clearCart = () => {
        setCartCount(0)
        setCartList([])
        setCartTotal(0)
    }
    const genOrder = async (e) => {
        e.preventDefault()
        let orden = {}
        orden.cliente = {
            nombre: "Rodrigo",
            email: "rodrfd@gmail.com",
            telefono: "3123123123"
        }
        orden.total = cartTotal

        orden.productos = cartList.map(cartProd => {
            const id = cartProd.id
            const nombre = cartProd.nombre
            const cantidad = cartProd.cantidad
            const costo = cartProd.costo * cartProd.cantidad
            return { id, nombre, cantidad, costo }
        })
        const db = getFirestore()
        const queryCollection = collection(db, "ordenes")
        await addDoc(queryCollection, orden)
            .then( ({id})  => muestraId(id))
            .catch(error => console.log(error))
            .finally( clearCart )
    }


    return (
        <>
            <CartContext.Provider value={{
                cartList,
                cartTotal,
                cartCount,
                addToCart,
                cartCant,
                removeFromCart,
                clearCart,
                buyer,
                genOrder
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider