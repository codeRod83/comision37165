import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main>
        <ItemListContainer />
      </main>
      </>
    )
  
}

export default App;