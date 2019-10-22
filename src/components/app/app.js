import React, { Component }from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../service/swapi-service'; 
import DummySwapiService from '../../service/dummy-swapi-service';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';



export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
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

    render() {

        return (
            <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
                <div className="app">
                    <Header onServiceChange={this.onServiceChange}/>
            
                    <RandomPlanet />

                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />

                </div>
            </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
};
