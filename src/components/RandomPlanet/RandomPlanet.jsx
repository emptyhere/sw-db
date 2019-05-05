import React from 'react';
import SwapiService from '../../services/SwapiService';
import Loading from './../Loading/Loading';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator';
import style from './RandomPlanet.module.css';

export default class RandomPlanet extends React.Component{

    swapiService = new SwapiService();

    state = {
        planet:{},
        loading: true
    };


    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 7500);
    }

    //memory leak fix
    componentWillUnmount(){
        clearInterval(this.interval);
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

    updatePlanet = () => {
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
            <div className='jumbotron'>
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
            <div className='row auto'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt='Planet'
                className={style.planetImg}
                />
                <div className='col auto'>
                 <ul className='list-group list-group-flush'>
                   <li className='list-group-item'>
                       {name}
                    </li>
                    <li className='list-group-item'>
                        <span>Population: {population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation Period: {rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter: {diameter}</span>
                    </li>
                 </ul>
                </div>
             </div>
        </React.Fragment>
    );

};