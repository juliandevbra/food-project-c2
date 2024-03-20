import React from 'react'
import { useRecipeStates } from '../Context/RecipeContext'
import Card from '../Components/Card'

const Favs = () => {

    const {state} = useRecipeStates()
  return (
    <div>
        {state.favs.map(fav => <Card key={fav.id} item={fav}/>)}
    </div>
  )
}

export default Favs