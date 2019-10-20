import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { withSwapiService } from '../HOC-helpers';



const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Fields field="model" label="Model" />
            <Fields field="length" label="Length" />
            <Fields field="costInCredits" label="Cost" />

        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    }
};


export default withSwapiService(StarshipDetails, mapMethodsToProps);