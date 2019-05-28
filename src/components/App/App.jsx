import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';

import SwapiService from "../../services/SwapiService";
import styles from './App.module.css';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import PeoplePage from './../Pages/PeoplePage/PeoplePage';
import PlanetsPage from './../Pages/PlanetsPage/PlanetsPage';
import StarshipsPage from './../Pages/StarshipsPage/StarshipsPage';


import {
  SwapiServiceProvider
} from '../swapi-service-context/SwapiServiceContext';
import StarshipDetails from '../sw-components/Starship-Details';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
          <div className={styles.stardbApp}>

            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Route path='/'
                   render={()=><h3>Welcome to SW-DB</h3>}
                   exact />
            <Route path='/people' component={PeoplePage}/>
            <Route path='/planets' component={PlanetsPage}/>
            <Route path='/starships' exact component={StarshipsPage} />
            <Route path='/starships/:id' 
                   render={({match})=>{
                     const {id} = match.params;
                     return <StarshipDetails 
                     itemId={id}/> 
                   }}/>

          </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}