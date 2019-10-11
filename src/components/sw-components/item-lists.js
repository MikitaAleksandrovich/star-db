import React from 'react';
import { withData }  from '../HOC-helpers';
import ItemList from '../item-list';
import SwapiService from '../../service/swapi-service';

const swapiService = new SwapiService();

const  { getAllPeople, 
        getAllStarships,
        getAllPlanets 
    } = swapiService;


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model}) => <span>{name} (model: {model})</span>



const PersonList = withData(
                            withChildFunction(ItemList, renderName), 
                            getAllPeople);

const PlanetList = withData(withChildFunction(ItemList, renderName),
                             getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, renderModelAndName),
                             getAllStarships);


export {
    PersonList,
    PlanetList,
    StarshipList
};