//import react into the bundle
import React from 'react'
import { Provider } from 'react-redux';
import StarWarsProvider from './store/context.js';
import store from './store/store.js';
import { createRoot } from 'react-dom/client'


import "../styles/index.css";


import App from './layout.js'

const root = createRoot(document.querySelector("#app"))


root.render(
    <Provider store={store}>
        <StarWarsProvider>      
            <App />
        </StarWarsProvider>
    </Provider>)

