import React from 'react';
import SwapiService from '../../services/SwapiService';
import Loading from './../Loading/Loading';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends React.Component{

    swapiService = new SwapiService();

    state = {
        planet:{},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) =>{
        this.setState({planet,
            loading: false,
            error: false
        });
    };

    onError = (err) =>{
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25)+2;
        this.swapiService
        .getCurrentPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
        }
    

    render(){

        const {planet, loading, error } = this.state;
        
        const hasData = !(loading || error);
        const errorMsg = error ? <ErrorIndicator /> : null;
        const loader = loading ? <Loading /> : null;
        const content = hasData ? <PlanetView planet={planet}/>:null;

        return(
            <div className='jumbotron rounded'>
            {loader}
            {content}
            {errorMsg}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

    const { id, name, population, 
        rotationPeriod, diameter } = planet;

    return(
        <React.Fragment>
          <span>{name}</span>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={`${name}`}
                />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Population:{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation Period:{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter:{diameter}</span>
                    </li>
                </ul>
        </React.Fragment>
    );

};