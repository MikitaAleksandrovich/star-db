import React, { Component }from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';


import './app.css';


export default class App extends Component {

    state = {
        showRandomPlanet: false,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });  
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true,
        })
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

       
        return (
            <ErrorBoundry>
            <div className="app">
            <Header />

            <PersonDetails  itemId={5}/>
            <PlanetDetails  itemId={5}/>
            <StarshipDetails itemId={5}/>

            <br/>
           

            <PersonList />

            <PlanetList />

            <StarshipList />

        </div>
        </ErrorBoundry>
        )
    }
};
