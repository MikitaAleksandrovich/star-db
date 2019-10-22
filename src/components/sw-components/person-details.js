import React from 'react';
import ItemDetails, { Fields } from '../item-details/item-details';
import { withSwapiService } from '../HOC-helpers';


const PersonDetails = (props) => {

     return (
        <ItemDetails {...props}>

            <Fields field="gender" label="Gender" />
            <Fields field="eyeColor" label="Eye Color" />

        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
};


export default withSwapiService(PersonDetails, mapMethodsToProps);