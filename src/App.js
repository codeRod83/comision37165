import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className="container">
        <ItemListContainer name='RM Sistemas' />
    </main>
    </>
    )
  
}

export default App;