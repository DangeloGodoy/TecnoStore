import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <div className='mx-auto max-w-sceen-xl py-4'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:nameCategory" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App