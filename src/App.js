import NavBar from "./components/navbar/NavBar"
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/cartContext'

const App = () => {
  return (
    <CartContextProvider
      value={{}}
    >
      <BrowserRouter>
        <NavBar  />
        <Main />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App