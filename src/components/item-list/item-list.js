import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  SwapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
  }

  componentDidMount() {
    this.SwapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList: peopleList,
        loading: false,
      })
    })
  }

  renderItem(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  


    render() {

      const { peopleList, loading } = this.state;

      if(loading) {
        return <Spinner />
      }

      const items = this.renderItem(peopleList);

        return (
          <div>
              <ul className="item-list list-group">
                {items}
              </ul>
          </div>
        );
    }
};