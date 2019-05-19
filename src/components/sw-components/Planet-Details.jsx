import React from 'react';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';
import withSwapiService from '../HocHelper/withSwapiService';


  const PlanetDetails = (props)  => {

            return(
        <ItemDetails {...props}>

        <Record 
        field='population' 
        label='Population
        '/>

         </ItemDetails>

    );
};

const mapMethodsToProps = (swapiService) =>{
    return{
      getData: swapiService.getPlanet,
      getImageUrl: swapiService.getPlanetImage
    }
};
export default withSwapiService(PlanetDetails, mapMethodsToProps);