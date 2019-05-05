import React from 'react';
import ItemList from './../ItemList/ItemList';
import PersonDetailes from './../PersonDetailes/PersonDetailes';

export default class PeoplePage extends React.Component{
    state={
        hasError: false
    };

    componentDidCatch(error, info){
        this.setState({hasError:true});
    };

    onPersonSelected = (selectedPerson) =>{
        this.setState({
            selectedPerson
        });
    };

    render(){
        if (this.state.hasError){
            return <span>Error</span>;
        }
        return (
            <div className='row auto'>

            <div className='col auto'>
               <ItemList onItemSelected={this.props.onItemSelected}/>
               </div>

               <div className='col auto'>
               <PersonDetailes personId={this.props.personId}/>
               </div>
               
           </div>
        );
    }
}