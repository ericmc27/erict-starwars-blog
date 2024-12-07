import React from "react"
import {LearnAboutCharacters, LearnAboutPlanets, LearnAboutVehicles} from '../components/learnAbouts'
import { useLocation } from "react-router"

const LearnMore = () => {
  const location = useLocation()
  const props = location.state
  let currentName = props.url.split('/')
  currentName = currentName[currentName.length-2]
 
  console.log(props)
  return (
    <>
      {props &&
        currentName === "people" ? <LearnAboutCharacters {...props} /> :
        currentName === "planets" ? <LearnAboutPlanets {...props}/> :
        <LearnAboutVehicles {...props}/>}
    </>
  )
}


export default LearnMore