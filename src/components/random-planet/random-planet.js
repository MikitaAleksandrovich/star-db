import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';

import './random-planet.css';


export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true
    };

    SwapiService = new SwapiService();

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoader = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoader);
    };

    
    render() {

        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const planetContent = !loading ? <RandomPlanetContent planet={planet}/> : null; 


        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {planetContent}
            </div>
        )
    }
};


const RandomPlanetContent = ({ planet }) => {

    const { name, id, population, rotation, diameter } = planet;

    return (
        <React.Fragment>
                <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></img>
                <div>
                    <h4 className="planet-name">{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation</span>
                            <span>{rotation}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    );
};