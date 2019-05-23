import React from 'react';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';
import withSwapiService from '../HocHelper/withSwapiService';


  const StarshipDetails = (props)  => {

            return(
        <ItemDetails {...props}>

        <Record 
         field='model' 
         label='Model'
        />

        <Record 
         field='manufacturer' 
         label='Manufacturer'
        />

        <Record 
         field='costInCredits' 
         label='Cost in credits'
        />

        <Record 
         field='length' 
         label='Length'
        />

        <Record 
         field='crew' 
         label='Crew'
        />

        <Record 
         field='passengers' 
         label='Passengers'
        />

        <Record 
         field='cargoCapacity' 
         label='Cargo capacity'
        />

         </ItemDetails>

    );
};

const mapMethodsToProps = (swapiService) =>{
    return{
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
    }
};
export default withSwapiService(mapMethodsToProps)(StarshipDetails);