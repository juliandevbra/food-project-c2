import { createContext, useContext, useState } from "react";

export const RecipeStates = createContext()

const Context = ({children}) => {
    //Todos los estados que necesito
    const [favs, setFavs] = useState([])
    console.log(favs)


    //Todas las funciones que necesito


    return (
        <RecipeStates.Provider value={{favs, setFavs}}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)