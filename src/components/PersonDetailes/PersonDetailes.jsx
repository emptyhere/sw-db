import React from 'react';
import SwapiService from '../../services/SwapiService';

export default class PersonDetails extends React.Component{
   
    swapiService = new SwapiService();  

    state = {
        person: null
    };

    componentDidMount(){
        this.updatePerson();
    };

    updatePerson() {
        const {personId} = this.props;
        if (!personId){
            return;
        }

        this.swapiService.getCurrentPerson(personId)
        .then((person)=>{
            this.setState({person});
        })
    }
   
    render(){
        
        if (!this.state.person){
            return <span>Select</span>;
        }
        const {
            id, name, gender, birthYear, eyeColor
        } = this.state.person;

        return(
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt="character"/>

                 <div>
                     <h4>{name} {this.props.personId}</h4>
                     <ul>
                         <li>
                             <span>Gender:{gender}</span>
                         </li>
                         <li>
                             <span>Birth year:{birthYear}</span>
                         </li>
                         <li>
                             <span>Eye color:{eyeColor}</span>
                         </li>
                     </ul>
                 </div>

            </div>

        );
    }
}