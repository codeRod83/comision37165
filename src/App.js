import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className="container">
        <ItemListContainer name='RM Sistemas' />
        <ItemDetailContainer name='RM Sistemas' />
    </main>
    </>
    )
  
}

export default App;