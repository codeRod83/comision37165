import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([])
    
    const addToCart = (producto) => {
        const idx = cartList.findIndex(prod => producto.id === prod.id)
        
        if (idx !== -1) {
            const newCartList = cartList
            const newCant = cartList[idx].cantidad + producto.cantidad
            // console.log(cartList[idx].cantidad)
            if (newCant <= producto.stock) {
                newCartList[idx].cantidad = newCant
                setCartList([...newCartList])
            } else {
                const restCant = cartList[idx].cantidad - producto.cantidad
                // console.log(restCant)
                alert(`No hay stock suficiente\n El Stock disponible es: ${restCant}`)
            }
        } else {
            setCartList([...cartList, producto])
        }
    }

    const removeFromCart = (producto) => {
        setCartList(cartList.filter(prod => prod.id !== producto.id))
    }
    const clearCart = () => {
        setCartList([])
    }

    return (
        <>
            <CartContext.Provider value={{
                cartList,
                addToCart,
                removeFromCart,
                clearCart
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider