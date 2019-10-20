import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { withSwapiService } from '../HOC-helpers';


const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props} >

            <Fields field="population" label="Population" />
            <Fields field="rotation" label="Rotation Period" />
            <Fields field="diameter" label="Diameter" />
        </ItemDetails>   
    );
};

const mapMethodsToProps = (swapiSevice) => {
    return {
        getData: swapiSevice.getPlanet,
        getImageUrl: swapiSevice.getPlanetImage,
    }
};


export default withSwapiService(PlanetDetails, mapMethodsToProps);