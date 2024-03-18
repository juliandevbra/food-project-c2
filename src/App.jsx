import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import RecipeDetail from './Pages/RecipeDetail'
import ParentComponent from './Clase 13/ParentComponent'
import LoboEstepario from './Clase 13/LoboEstepario'
import Context from './Context/Context'


function App() {

  return (
    <>
      {/* <Context>
        <ParentComponent >
          <h1>Esto es el contenido de Parent</h1>
          <li>Elemento 1</li>
          <li>Elemento 1</li>
        </ParentComponent>

        <ParentComponent>
          <h3>Esto es otro contenido</h3>
          <input type="text" /><input type="text" />
        </ParentComponent>

        <LoboEstepario />
      </Context> */}
      
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.detail} element={<RecipeDetail/>}/>
      </Routes>

    </>
  )
}

export default App
