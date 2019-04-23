import React from 'react';
import SwapiService from '../../services/SwapiService';
import Loading from '../Loading/Loading';

export default class ItemList extends React.Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount(){
        this.swapiService.getAllPeople()
        .then((peopleList)=>{
            this.setState({
                peopleList
            });
        });

    }

    renderItems(arr){
        return arr.map(({id, name}) => {
            return(
                <li className='list-group-item'
                key={id}
                onClick={()=>this.props.onItemSelected(id)}
                >
                {name}
                </li>
            );
        });
    }


    render(){

        const {peopleList} = this.state;
        
        if (!peopleList) {
            return <Loading />;
        }
        const items = this.renderItems(peopleList);

        return(
            <ul className='list-group'>
             {items}
            </ul>
        );
    }
}