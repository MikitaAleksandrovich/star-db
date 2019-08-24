import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    state = {
        id: null,
        name: null,
        population: null,
        rotation: null,
        diameter: null
    };

    SwapiService = new SwapiService();

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.SwapiService.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotation: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    };

    
    render() {

        const { name, id, population, rotation, diameter } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
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
            </div>
        )
    }
};