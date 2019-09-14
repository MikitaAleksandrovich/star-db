import React, { Component }from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../service/swapi-service';


import './app.css';


export default class App extends Component {

    SwapiService = new SwapiService();

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
            <div className="app">
            <Header />
            
            {planet}

            <button className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}
            >
                Toggle Random Planet
            </button>
            <ErrorButton />

            <PeoplePage/>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.SwapiService.getAllPlanets}/>
                </div>
                <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.SwapiService.getAllStarships}/>
                </div>
                <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
       
       
        </div>
        )
    }
};
