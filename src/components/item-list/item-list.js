import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  SwapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.SwapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      })
      console.log(this.state.peopleList);
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

      const { peopleList } = this.state;

      if(!peopleList) {
        return <Spinner />
      }

      const items = this.renderItem(peopleList);

        return (
          <ul className="item-list list-group">
            {items}
          </ul>
        );
    }
};