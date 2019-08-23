import React from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';


const App = () => {
    return(
        <div className="app">
            <Header />
            <RandomPlanet/>
        </div>
    )
}

export default App;

