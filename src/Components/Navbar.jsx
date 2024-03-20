import { Link, useNavigate } from "react-router-dom"
import { routes } from "../utils/routes"

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div>
        <button onClick={() => navigate(-1)}>🔙</button>
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.about}><h4>About</h4></Link>
        <Link to={routes.favs}><h4>Favs</h4></Link>
    </div>
  )
}

export default Navbar