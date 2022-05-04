import Header from './Header'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App