import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { useRecipeStates } from "../Context/RecipeContext"
import { RecipeStates } from "../Context/RecipeContext"

const RecipeDetail = () => {
    const params = useParams()
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=` + apiKey   
    //Llamado a context
    const {state, dispatch} = useRecipeStates()
    // const {favs, setFavs} = useContext(RecipeStates)
    const {recipeSelected} = state
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_RECIPE', payload: res.data})) //setRecipe(res.data)
    }, [])
  return (
    <div>
        <h3>{recipeSelected.title}</h3>
        <img src={recipeSelected.image} alt="" />
        <h5>{recipeSelected.summary}</h5>
        <button onClick={() => dispatch({type: 'ADD_FAV', payload: recipeSelected})}>
          ⭐
        </button>
    </div>
  )
}

export default RecipeDetail

