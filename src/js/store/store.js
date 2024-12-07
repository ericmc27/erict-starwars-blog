import {createSlice, configureStore} from '@reduxjs/toolkit'



const initialState = {
	starWarsCharacters: [], starWarsPlanets: [], starWarsVehicles: [],
	favorites: [], searchProperties: {characters: [], planets: [], vehicles: []}
}

const homeReducer = createSlice({
	name: "home",
	initialState: initialState,
	reducers: {
		addCharacters: (state, action)=>{
			state.starWarsCharacters = action.payload
		},
		addCharacterProperties: (state, action)=>{
			state.searchProperties.characters.push(action.payload)
		},
		addPlanets: (state, action)=>{
				state.starWarsPlanets = action.payload
		},
		addPlanetsProperties: (state, action)=>{
			state.searchProperties.planets.push(action.payload)
		},
		addVehicles: (state, action)=>{
			state.starWarsVehicles = action.payload
		},
		addVehiclesProperties: (state, action)=>{
			state.searchProperties.vehicles.push(action.payload)
		},
		addFavorite: (state, action)=>{
			const name = action.payload.name
			const favorite = state.favorites.some(favorite=>favorite.name === name)
		
			if(!favorite){
				state.favorites.push(action.payload)
			}

		},
		deleteFavorite: (state, action)=>{
			const name = action.payload.name
			state.favorites = state.favorites.filter(favorite=>favorite.name!==name)
		}
	}
})

const store = configureStore({
	reducer: {
		home: homeReducer.reducer
	}
})

export const {addCharacters, addCharacterProperties, addPlanets, addPlanetsProperties, addVehicles, addVehiclesProperties, addFavorite, deleteFavorite} = homeReducer.actions
export default store
