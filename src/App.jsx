import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import RecipeDetail from './Pages/RecipeDetail'
// import ExampleAxios from './Components/ExampleAxios'
// import Pet from './Components/Pet'

function App() {

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path={routes.detail} element={<RecipeDetail/>}/>
      </Routes>

        {/* <Pet/>
        <ExampleAxios/> */}
    </>
  )
}

export default App
