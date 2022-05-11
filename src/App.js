import Header from './Header'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/cartContext'

const App = () => {
  return (
    <CartContextProvider
      value={{}}
    >
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App