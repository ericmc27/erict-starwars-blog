import React from 'react'
import { useNavigate } from 'react-router-dom'
import { vehicles } from '../../img/vehicles.jsx' /**The vehicles weren't in order, so I created a list with the correct order */
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, deleteFavorite } from '../store/store'


export const CardCharacters = (props) => {
  const { uid, name, gender, hair_color, eye_color } = props

  return (
    <div className="card d-flex justify-content-between bg-dark border border-warning text-light mb-3" style={{ width: "300px", height: "400px" }}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" width={"285px"} height={"200px"} />

      <div className='mb-4'>
        <h5 className="card-title ms-3">{name}</h5>
        <p className='m-0 ms-3'>{`Gender: ${gender}`}</p>
        <p className='m-0 ms-3'>{`Hair Color: ${hair_color}`}</p>
        <p className='m-0 ms-3'>Eye Color: {eye_color}</p>
      </div>

      <Buttons {...props}/>
    </div>
  )
}

export const CardPlanets = (props) => {
  const {uid, name, population, terrain} = props

  return (
    <div className="card d-flex justify-content-between bg-dark border border-warning text-light mb-3" style={{ width: "300px", height: "400px" }}>
      <img src={uid === "1" ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="card-img-top" width={"285px"} height={"200px"} />

      <div className='mb-4'>
        <h5 className="card-title ms-3">{name}</h5> 
        <p className='m-0 ms-3'>{`Population: ${population}`}</p>
        <p className='m-0 ms-3'>{`Terrain: ${terrain}`}</p>
      </div>

      <Buttons {...props}/>
    </div>
  )
}


export const CardVehicles = (props) => {
  const {index, name, manufacturer, passengers} = props
  
  return (
    <div className="card d-flex justify-content-between bg-dark border border-warning text-light mb-3" style={{ width: "300px", height: "400px" }}>
      <img src={`${vehicles[index]}`} className="card-img-top" width={"285px"} height={"200px"} />

      <div className='mb-4'>
        <h5 className="card-title ms-3">{name}</h5> 
        <p className='m-0 ms-3'>{`Manuafacturer: ${manufacturer}`}</p> 
        <p className='m-0 ms-3'>{`Passengers: ${passengers}`}</p>
      </div>

      <Buttons {...props}/>
    </div>
  )
}


const Buttons = (props) => {
  const favorites = useSelector(state=>state.home.favorites)
  const {name} = props
  const isFavorite = favorites.some(favorite=>favorite.name===name)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = ()=>{
    if(isFavorite){
      dispatch(deleteFavorite(props))
    }else{
      dispatch(addFavorite(props))
    }
  }

  return (
    <div className='d-flex mb-3' >
      <button onClick={()=> navigate(`learn?name=${name}`, {state: {...props}})} style={{ width: "120px", }} className='btn-learn btn border-primary border-2 text-primary fw-bold ms-3 me-auto'>
        Learn more!
      </button>
      <button style={{ fontSize: "22px", marginRight: "15px", height: "45px", backgroundColor: isFavorite ? "yellow" : ""}} onClick={handleClick} className={`btn-heart btn ${isFavorite ? "border-dark text-dark" : "border-warning text-warning"} border-2`}>&hearts;</button>
    </div>
  )
}