import { Link, useLocation } from "react-router-dom"
import { useRecipeStates } from "../Context/RecipeContext"

const Card = ({item}) => {
  const location = useLocation()
  console.log(location)
  const {dispatch} = useRecipeStates()
  return (
    <div>
        <Link to={'/detail/' + item.id}>
            <h3>{item.title}</h3>
        </Link>
        <img src={item.image} alt="" />
        { location.pathname == '/favs' &&
          <button onClick={() => dispatch({type: 'DELETE_FAV', payload: item.id})}>
          🌟
        </button>}
    </div>
  )
}

export default Card