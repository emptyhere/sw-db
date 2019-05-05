import React from 'react';
import SwapiService from '../../services/SwapiService';
import style from './PersonDetailes.module.css';

export default class PersonDetails extends React.Component{
   
    swapiService = new SwapiService();  

    state = {
        person: null
    };


    componentDidMount(){
        this.updatePerson();
    };

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }

    };

    updatePerson() {
        const {personId} = this.props;
        if (!personId){
            return;
        }

        this.swapiService.getCurrentPerson(personId)
        .then((person)=>{
            this.setState({person});
        });
    };
   
    render(){
        
        if (!this.state.person){
            return <span>Select</span>;
        }
        const {
             name, gender, birth_year, eye_color,
             height, mass, hair_color, skin_color
        } = this.state.person;

        return(
            <div className='jumbotron row auto'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`}
                 alt="character"
                 className={style.personImg}
                 />

                 <div>
                     <h4>{name}</h4>
                     <ul className='list-group list-group-flush'>
                         <li className='list-group-item'>
                             <span>Gender: </span>
                             <span>{gender}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Birth year: </span>
                             <span>{birth_year}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Eye color: </span>
                             <span>{eye_color}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Height: </span>
                             <span>{height}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Mass: </span>
                             <span>{mass}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Hair color: </span>
                             <span>{hair_color}</span>
                         </li>
                         <li className='list-group-item'>
                             <span>Skin color: </span>
                             <span>{skin_color}</span>
                         </li>
                     </ul>
                 </div>

            </div>

        );
    }
}