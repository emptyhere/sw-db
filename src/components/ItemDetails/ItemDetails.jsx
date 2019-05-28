import React, { Component } from 'react';

import styles from './ItemDetails.module.css';

const Record = ({item, field, label}) => {
  return(
  <li className="list-group-item">
    <span className="term">{label}:</span>
    <span>{item[field]}</span>
  </li>
 );
};

export {Record};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ item,
           image: getImageUrl(item) });
      });
  }

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name} = item;

    return (
      <div className={`${styles.personDetails} card`}>
        <img className={styles.personImage}
          src={image}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child)=>{
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
