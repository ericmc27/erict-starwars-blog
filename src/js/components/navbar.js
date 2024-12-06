import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarWarsLogo from "./starWarsLogo";
import { useSelector } from "react-redux";
import garbage from '../../img/garbage.png'
import { deleteFavorite } from "../store/store";
import { starwarsContext } from "../store/context";

export const Navbar = () => {
	const {starWarsCharacters,  starWarsPlanets,  starWarsVehicles, dispatch, properties} = starwarsContext()
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const favoriteCharacters = useSelector(state=>state.home.favorites)
	const allStarWarsProperties = Object.values(properties).flat()
	const allUids = [starWarsCharacters, starWarsPlanets, starWarsVehicles].flat()


	const toggleDropDown = ()=>{
		setIsOpen(prev=>!prev)
	}

	const handleChange = (e)=>{
		const ul = document.querySelector(".ul-search")/**select UL */
		const childs = Array.from(document.querySelectorAll(".ul-search li")) /**li items already present within the ul */

		if(e.target.value.length===0){
			childs.forEach((li)=>ul.removeChild(li)) /**remove list items */
			return
		}

		let itemsFound = allStarWarsProperties.filter(obj=>obj.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
	

		childs.forEach((li) => {
			const itemText = li.textContent.toLowerCase();
			const existsInFilter = itemsFound.some(
				(obj) => obj.name.toLowerCase() === itemText
			);
			if (!existsInFilter) {
				ul.removeChild(li); // Remove the outdated item
			}
		});

		itemsFound.forEach(obj=>{
			const flag =  childs.some(li=>li.textContent.toLowerCase()===obj.name.toLowerCase())

			if(!flag){
				const li = document.createElement("li")
				li.textContent = obj.name
				li.classList.add("bg-warning", "text-dark", "fw-bold")
				li.style.paddingLeft = "10px"
				li.style.cursor = "pointer"
				li.addEventListener("click", ()=>{
					document.querySelector(".input-search").value = ""
					ul.innerHTML = ""
					const uid = allUids.find(item=>item.name===obj.name).uid
					navigate("learn", {state: {...obj, uid}})
				})
				ul.append(li)
			}
		})
	}
	
	return (
		<nav className="navbar bg-dark mb-3 fixed-top border-bottom border-warning">
			<Link to={"/"}><StarWarsLogo/></Link>
			
			<div>
				<input className="bg-dark border border-light text-warning input-search p-2" style={{width:"318px"}} type="text" onChange={handleChange} placeholder={"Search for characters, planets, or vehicles"}/>
				<ul style={{width: "320px"}} className="bg-dark text-warning list-unstyled position-absolute ul-search">
				</ul>
			</div>

			<div>
				<button onClick={toggleDropDown} style={{width: "180px"}} className="btn-favorites d-flex btn btn-primary dropdown-toggle shadow-none me-5" >
					Favorites 
					<div className="mx-2 ms-3" style={{width: "20px"}}>{favoriteCharacters.length}</div>
					</button>

				{isOpen &&(
					<ul className="p-0 bg-primary position-absolute" style={{width: "180px", minWidth: "0px"}}>
									{favoriteCharacters.length > 0 ?
										favoriteCharacters.map((favorite, index)=>(
														<li key={index} className="d-flex bg-primary text-light list-unstyled justify-content-between">
																		<span role="button" onClick={()=>(navigate("learn", {state: {...favorite}}))} className="ms-2">{favorite.name}</span>
								 										<img role="button" onClick={()=>(dispatch(deleteFavorite(favorite)))} src={garbage} height={"18px"} className="my-auto me-2"></img>
														</li>	
										)) : <li className="bg-primary text-light list-unstyled text-center">(empty)</li>}
					</ul>
				)}

			</div>

		 </nav>
	);
}