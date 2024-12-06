import React from "react"
import { charactersInfo, planetsInfo, vehiclesInfo } from "../../info/starwarsInfo"


export const LearnAboutCharacters = (props) => {
  const displayProperties = ['name', 'birth_year', 'skin_color', 'height', 'eye_color', 'hair_color', 'gender', 'mass']

  return (
    <div className="d-flex flex-column align-items-center" style={{ marginTop: "140px" }}>
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center me-4">
          <h1 className="stroke mb-4">{props.name}</h1>
          <img style={{ height: "290px", width: "250px", marginRight: "15px" }} className="border border-2 border-warning rounded-circle" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} />
        </div>
        <div className="d-flex flex-column justify-content-center mt-5">
          {displayProperties.map((key, index) => {
            return (
              <li key={index} style={{ fontSize: "23px" }} className="text-warning">{key}: <span className="text-light">{props[key]}</span></li>
            )
          })}
        </div>
        <img className="m-auto" width={"160px"} height={"150px"} src="https://media0.giphy.com/media/4zS4PtMzotQv1jO2ZH/200w.gif?cid=82a1493b4jqblkiaugzxzg3ifylkg5f4m0cfyqx0cbvi97ci&ep=v1_gifs_related&rid=200w.gif&ct=s"></img>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p style={{ padding: "10px", width: "700px", textAlign: "justify", marginTop: "20px" }} className="text-warning">{charactersInfo[props.index]}</p>
      </div>
    </div>
  )
}

export const LearnAboutPlanets = (props) => {
  const displayProperties = ['name', 'population', 'gravity', 'climate', 'terrain', 'diameter', 'orbital_period', 'rotation_period']

  return (
    <div className="d-flex flex-column align-items-center" style={{ marginTop: "140px" }}>
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center me-4">
          <h1 className="stroke mb-4">{props.name}</h1>
          <img style={{ height: "290px", width: "250px", marginRight: "15px" }} className="border border-2 border-warning rounded-circle" src={props.uid === "1" ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" : `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} />
        </div>
        <div className="d-flex flex-column justify-content-center mt-5">
          {displayProperties.map((key, index) => {
            return (
              <li key={index} style={{ fontSize: "23px" }} className="text-warning">{key}: <span className="text-light">{props[key]}</span></li>
            )
          })}
        </div>
        <img className="m-auto" width={"160px"} height={"150px"} src="https://media0.giphy.com/media/4zS4PtMzotQv1jO2ZH/200w.gif?cid=82a1493b4jqblkiaugzxzg3ifylkg5f4m0cfyqx0cbvi97ci&ep=v1_gifs_related&rid=200w.gif&ct=s"></img>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p style={{ padding: "10px", width: "700px", textAlign: "justify", marginTop: "20px" }} className="text-warning">{planetsInfo[props.index]}</p>
      </div>
    </div>
  )
}

export const LearnAboutVehicles = (props) => {
  const displayProperties = ["name", "crew", "manufacturer", "passengers", "model", "vehicle_class", "cost_in_credits", "length"]

  return (
    <div className="d-flex flex-column align-items-center" style={{ marginTop: "140px" }}>
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center me-4">
          <h1 className="stroke mb-4">{props.name}</h1>
          <img style={{ height: "290px", width: "250px", marginRight: "15px" }} className="border border-2 border-warning rounded-circle" src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} />
        </div>
        <div className="d-flex flex-column justify-content-center mt-5">
          {displayProperties.map((key, index) => {
            return <li key={index} style={{fontSize:"23px"}} className="text-warning">{key}: <span className="text-light">{props[key]}</span></li>
          })}
        </div>
        <img className="m-auto" width={"160px"} height={"150px"} src="https://media0.giphy.com/media/4zS4PtMzotQv1jO2ZH/200w.gif?cid=82a1493b4jqblkiaugzxzg3ifylkg5f4m0cfyqx0cbvi97ci&ep=v1_gifs_related&rid=200w.gif&ct=s"></img>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p style={{ padding: "10px", width: "700px", textAlign: "justify", marginTop: "20px" }} className="text-warning">{vehiclesInfo[props.index]}</p>
      </div>
    </div>
  )
}
