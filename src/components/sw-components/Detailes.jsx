import React from 'react';

import ItemDetails, {Record} from './../ItemDetails/ItemDetails';

import {
    SwapiServiceConsumer
  } from '../swapi-service-context/SwapiServiceContext';
  


const PersonDetails = ({itemId})  => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage})=>{
                    return(
                        <ItemDetails itemId={itemId}
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                        >
                        
                        <Record field='gender' label='Gender'/>
                  
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId})  => {
    return (
        <SwapiServiceConsumer>
            {({getPlanet, getPlanetImage}) =>{
                return(
                 <ItemDetails itemId={itemId}
                   getData={getPlanet}
                   getImageUrl={getPlanetImage}
                 >

                     <Record 
                     field='population' 
                     label='Population
                     '/>

                 </ItemDetails>
                );
               }
            }
            </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({itemId})  => {
    return (
        <SwapiServiceConsumer>
        {({getStarship, getStarshipImage})=>
        {
        return(

             <ItemDetails itemId={itemId}
             getData={getStarship}
             getImageUrl={getStarshipImage}
             >

             <Record field='model' label='Model'/>

             </ItemDetails>
         );
        }
            }
            </SwapiServiceConsumer>
    );
};

export{
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};