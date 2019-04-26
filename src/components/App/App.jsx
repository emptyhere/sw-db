import React from 'react';
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetailes/PersonDetailes';

export default class App extends React.Component{
  
    state = {
        selectedPerson: null
    };

    onItemSelected = (id) =>{
        this.setState({
            selectedPerson: id
        });
    };

    render(){
    return(
        <div className='container'>
        <Header />
        <RandomPlanet />
        <ItemList onItemSelected={this.onItemSelected}/>
        <PersonDetails personId={this.state.selectedPerson}/>
        </div>
    );
    };
}

