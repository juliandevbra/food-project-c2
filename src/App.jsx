import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import RecipeDetail from './Pages/RecipeDetail'
import Counter from './Components/Counter'
import Favs from './Pages/Favs'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.detail} element={<RecipeDetail/>}/>
      </Routes>

    </>
  )
}

export default App
