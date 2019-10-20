import React from 'react';

import ItemDetails, { Fields } from '../item-details/item-details';
import { withSwapiService } from '../HOC-helpers';


const PersonDetails = ({ itemId, swapiService }) => {

    const { getPerson, getPersonImage } = swapiService;

     return (
        <ItemDetails itemId={itemId}
                    getData={getPerson}
                    getImageUrl={getPersonImage}>

            <Fields field="gender" label="Gender" />
            <Fields field="eyeColor" label="Eye Color" />

        </ItemDetails>
    );
};


export default withSwapiService(PersonDetails);