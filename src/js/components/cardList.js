import React from 'react';
import { starwarsContext } from '../store/context';
import { CardCharacters, CardPlanets, CardVehicles } from './cards'


const CardList = () => {
  const {starWarsCharacters, starWarsPlanets, starWarsVehicles, properties} = starwarsContext()

  return (
    <div className='container-fluid' style={{ marginTop: "110px" }}>
      <h2 className="text-warning mb-3" style={{ marginLeft: "90px" }}>Characters</h2>
      <div className="row flex-nowrap overflow-auto" style={{ marginLeft: "95px" }}>
        {
          starWarsCharacters.map((character, index) => {
            return <div key={index} className='col' style={{ paddingLeft: index === 0 && "0px" }}>
              <CardCharacters {...character} {...properties.characters[index]} />
            </div>
          })
        }
      </div>

      <h2 className="text-warning mb-3 mt-4" style={{ marginLeft: "90px" }}>Planets</h2>
      <div className='row flex-nowrap overflow-auto' style={{ marginLeft: "95px" }}>
        {
          starWarsPlanets.map((planet, index) => {
            return <div key={index} className='col' style={{ paddingLeft: index === 0 && "0px" }}>
              <CardPlanets {...planet} {...properties.planets[index]} />
            </div>
          })
        }
      </div>

      <h2 className="text-warning mb-3 mt-4" style={{ marginLeft: "90px" }}>Vehicles</h2>
      <div className='row flex-nowrap overflow-auto' style={{ marginLeft: "95px" }}>
        {
          starWarsVehicles.map((vehicle, index) => {
            return <div key={index} className='col' style={{ paddingLeft: index === 0 && "0px" }}>
              <CardVehicles {...vehicle} {...properties.vehicles[index]} index={index} />
            </div>
          })
        }
      </div>

    </div> 
  )
}

export default CardList