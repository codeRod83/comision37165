import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import Cart from "./components/cart/Cart"
import { Route, Routes } from "react-router-dom"


const Main = () => { 
    return (   
        <main className="container">
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer
                        name='RM Sistemas'
                    />}
                />
                <Route
                    path="/categoria/:categoriaId"
                    element={<ItemListContainer
                        name='RM Sistemas'
                    />}
                />
                <Route
                    path="/detalle/:detalleId"
                    element={<ItemDetailContainer
                        name='RM Sistemas'
                    />}
                />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main