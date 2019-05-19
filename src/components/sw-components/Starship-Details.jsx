import React from 'react';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';
import withSwapiService from '../HocHelper/withSwapiService';


  const StarshipDetails = (props)  => {

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
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
    }
};
export default withSwapiService(StarshipDetails, mapMethodsToProps);