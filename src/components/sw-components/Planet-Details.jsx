import React from 'react';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';
import withSwapiService from '../HocHelper/withSwapiService';


  const PlanetDetails = (props)  => {

            return(
        <ItemDetails {...props}>

        <Record 
         field='population' 
         label='Population'
        />

       <Record 
         field='rotationPeriod' 
         label='Rotation period'
        />

        <Record 
         field='diameter' 
         label='Diameter'
        />

         </ItemDetails>

    );
};

const mapMethodsToProps = (swapiService) =>{
    return{
      getData: swapiService.getPlanet,
      getImageUrl: swapiService.getPlanetImage
    }
};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);