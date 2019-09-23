import React from 'react';
import { withData }  from '../HOC-helpers';
import ItemList from '../item-list';
import SwapiService from '../../service/swapi-service';

const swapiService = new SwapiService();

const  { getAllPeople, 
        getAllStarships,
        getAllPlanets 
    } = swapiService;


const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);


export {
    PersonList,
    PlanetList,
    StarshipList
};