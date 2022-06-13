
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/cartContext'
import Navbar from "./components/navBar/NavBar"

const App = () => {
  return (
    <CartContextProvider
      value={{}}
    >
      <BrowserRouter>
        <Navbar  />
        <Main />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App