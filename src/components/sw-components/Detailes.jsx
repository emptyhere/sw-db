import React from 'react';

import SwapiService from './../../services/SwapiService';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId})  => {
    return (
        <ItemDetails itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
        >
        
        <Record field='gender' label='Gender'/>
  
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId})  => {
    return (
    <ItemDetails itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
    >

    <Record field='population' label='Population'/>

    </ItemDetails>
    );
};

const StarshipDetails = ({itemId})  => {
    return (
    <ItemDetails itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}
    >

    <Record field='model' label='Model'/>

    </ItemDetails>
    );
};

export{
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};