import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer textProps="Proximamente actualizaremos nuestro stock :D" />
    </div>
  )
}

export default App
