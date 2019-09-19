import React, { Component } from 'react';
import ErrorButton from '../error-button';

import './item-details.css';

const Fields = ( {item, field, label} ) => {
    return (
      <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
      </li>
    );
};

export {
  Fields
};


export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;

    if(!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      })
    })
  }


    render() {

      const { image, item } = this.state;

      if(!this.state.item) {
        return <span className="notSelected"> Please, select a person from a list</span>
      }

      const { name } = item;

      


        return (
            <div className="item-details card">
              <img className="item-image"
                src={image} alt={name}/>
              <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                  {
                    React.Children.map(this.props.children, (child) => {
                      return React.cloneElement(child, {item});
                    })
                  }
                </ul>
                <br/>
                <ErrorButton/>
              </div>
            </div>
        );
    }
};