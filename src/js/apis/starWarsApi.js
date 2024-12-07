import { addCharacters, addCharacterProperties, addPlanets, addPlanetsProperties, addVehicles, addVehiclesProperties } from '../store/store'

export const loadCharacters = async (dispatch) => {
	const response = await fetch('https://www.swapi.tech/api/people/', { cache: 'force-cache' })
	const data = await response.json()
	dispatch(addCharacters(data.results))
}


export const loadCharactersProperties = async (dispatch) => {
	let index = 0
	let num = 1
	const path = 'https://www.swapi.tech/api/people/'

	while (num != 11) {
		const response = await fetch(`${path}${num++}`, { cache: 'force-cache' })
		const data = await response.json()
		dispatch(addCharacterProperties({ ...data.result.properties, index: index++ }))
	}
}


export const loadPlanets = async (dispatch) => {
	const response = await fetch('https://www.swapi.tech/api/planets/', { cache: 'force-cache' })
	const data = await response.json()
	dispatch(addPlanets(data.results))
}

export const loadPlanetsProperties = async (dispatch) => {
	let index = 0
	let num = 1
	const path = 'https://www.swapi.tech/api/planets/'

	while (num != 11) {
		const response = await fetch(`${path}${num++}`, { cache: 'force-cache' })
		const data = await response.json()
		dispatch(addPlanetsProperties({ ...data.result.properties, index: index++ }))
	}
}

export const loadVehicles = async (dispatch) => {
	const response = await fetch('https://www.swapi.tech/api/vehicles/', { cache: 'force-cache' })
	const data = await response.json()
	dispatch(addVehicles(data.results))
}

export const loadVehiclesProperties = async (dispatch) => {
	let index = 0
	let nums = [4, 7, 6, 8, 14, 18, 16, 19, 20, 24]
	const path = 'https://www.swapi.tech/api/vehicles/'

	for (let num of nums) {
		const response = await fetch(`${path}${num}`, { cache: 'force-cache' })
		const data = await response.json()
		dispatch(addVehiclesProperties({ ...data.result.properties, index: index++ }))
	}
}