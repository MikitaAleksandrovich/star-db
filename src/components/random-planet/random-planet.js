import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';


export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000,
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    state = {
        planet: {},
        loading: true,
        error: false
    };

    SwapiService = new SwapiService();

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoader = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 3);
        
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoader)
            .catch(this.onError);
    };

    
    render() {

        const { planet, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const planetContent = !loading && !error ? <RandomPlanetContent planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
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
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}></img>
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