import React from 'react'
import { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";



const StarWarsContext = createContext(null)

export const starwarsContext = ()=>(useContext(StarWarsContext))

const StarWarsProvider = ({children})=>{
  const dispatch = useDispatch()
  const starWarsCharacters = useSelector(state => state.home.starWarsCharacters)
  const starWarsPlanets = useSelector(state => state.home.starWarsPlanets)
  const starWarsVehicles = useSelector(state=>state.home.starWarsVehicles)
  const properties = useSelector(state => state.home.searchProperties)


  return(
    <StarWarsContext.Provider value={{starWarsCharacters, starWarsPlanets, starWarsVehicles, properties, dispatch}}>
        {children}
    </StarWarsContext.Provider>
  )
}

export default StarWarsProvider