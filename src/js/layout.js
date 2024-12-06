import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCharacters, loadPlanets, loadCharactersProperties, loadPlanetsProperties, loadVehicles, loadVehiclesProperties } from "./apis/starWarsApi";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./views/home";
import { Navbar } from "./components/navbar";
import LearnMore from "./views/learnMore";


const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		loadCharacters(dispatch)
		loadCharactersProperties(dispatch)
		loadPlanets(dispatch)
		loadPlanetsProperties(dispatch)
		loadVehicles(dispatch)
		loadVehiclesProperties(dispatch)
	}, [])

	return (
			<Router>
				<ScrollToTop/>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/learn" element={<LearnMore />}></Route>
					<Route path="*" element={<div>Not found</div>}></Route>
				</Routes>
			</Router>
	)
}

export default App
