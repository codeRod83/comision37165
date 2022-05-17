import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    // const [stockDisp, setStockDisp] = useState(0)
    
    
    const addToCart = (producto, cantidad, stock) => {
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
        // if ((newCartList[idx].cantidad + producto.cantidad) <= stock) {
        // } else {
        //         const restCant = stock - newCartList[idx].cantidad
        //         alert(`No hay stock suficiente\n El Stock disponible es: ${restCant}`)
        // }
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

    return (
        <>
            <CartContext.Provider value={{
                cartList,
                cartTotal,
                cartCount,
                addToCart,
                cartCant,
                removeFromCart,
                clearCart
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider