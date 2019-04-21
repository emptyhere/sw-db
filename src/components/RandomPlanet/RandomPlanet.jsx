import React from 'react';
import SwapiService from '../../services/SwapiService';

export default class RandomPlanet extends React.Component{

    swapiService = new SwapiService();

    state = {
        planet:{}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) =>{
        this.setState({planet});
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25)+2;
        this.swapiService
        .getCurrentPlanet(id)
        .then(this.onPlanetLoaded);
        }
    

    render(){

        const {planet: { id, name, population, 
        rotationPeriod, diameter } } = this.state;

        return(
            <div>
                <span>{name}</span>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={`${name}`}
                />
                <ul>
                    <li>
                        <span>Population:{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period:{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter:{diameter}</span>
                    </li>
                </ul>

            </div>
        );
    }
}