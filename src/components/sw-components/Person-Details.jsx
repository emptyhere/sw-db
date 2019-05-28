import React from 'react';
import ItemDetails, {Record} from './../ItemDetails/ItemDetails';
import withSwapiService from '../HocHelper/withSwapiService';


const PersonDetails = (props) => {
    return (
      <ItemDetails {...props} >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth year" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
        <Record field="skin_color" label="Skin color" />
        <Record field="hair_color" label="Hair color " />


      </ItemDetails>
    );
  };
  
  const mapMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getPerson,
      getImageUrl: swapiService.getPersonImage
    }
  };
  
  export default withSwapiService(mapMethodsToProps)(PersonDetails);
  