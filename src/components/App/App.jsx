import React from 'react';
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';


export default class App extends React.Component{
  
    state = {
        selectedPerson: null,
        hasError: false
    };

    onItemSelected = (id) =>{
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(){
        this.setState({hasError:true});
    };

    render(){
        if(this.state.hasError){
            return <span>error</span>;
        }

    return(
        <div className='container'>
        <Header />
        <RandomPlanet />
        <PeoplePage onItemSelected={this.onItemSelected} 
        personId={this.state.selectedPerson}
        />
      

        </div>
    );
    };
}

