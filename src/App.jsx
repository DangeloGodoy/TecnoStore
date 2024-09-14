import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='mx-auto max-w-sceen-xl py-4'>
        <NavBar/>
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default App


/* import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
} */