import React, { Component }from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../service/swapi-service'; 
import DummySwapiService from '../../service/dummy-swapi-service';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-context';


import './app.css';



export default class App extends Component {


    state = {
        showRandomPlanet: false,
        hasError: false,
        swapiService: new DummySwapiService()
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });  
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            console.log('Swithced to:', Service.name);
        
        return {
            swapiService: new Service()
        }
        });

        
    };

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true,
        })
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

       
        return (
            <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
            <div className="app">
            <Header onServiceChange={this.onServiceChange}/>

            <PersonDetails  itemId={5}/>
            <PlanetDetails  itemId={5}/>
            <StarshipDetails itemId={5}/>

            <br/>
           

            <PersonList />

            <PlanetList />

            <StarshipList />

        </div>
        </SwapiServiceProvider>
        </ErrorBoundry>
        )
    }
};
