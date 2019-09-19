import React, { Component }from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Fields } from '../item-details/item-details';
import SwapiService from '../../service/swapi-service';
import Row from '../row';


import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

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

        const  { getPerson, getPersonImage, getStarship, getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11}
                        getData={getPerson}
                        getImageUrl={getPersonImage}>

                <Fields field="gender" label="Gender" />
                <Fields field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5} 
                        getData={getStarship}
                        getImageUrl={getStarshipImage}>

                <Fields field="model" label="Model" />
                <Fields field="length" label="Length" />
                <Fields field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
            <div className="app">
            <Header />
            {planet}

            <button className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
            </button>

            <ErrorButton />

            <PeoplePage/>

            <Row 
            left={personDetails}
            right={starshipDetails}
            />

        </div>
        </ErrorBoundry>
        )
    }
};
