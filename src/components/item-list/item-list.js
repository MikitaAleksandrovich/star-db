import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null,
    loading: true,
  }

  componentDidMount() {
    
    const { getData } = this.props;
    
    getData()
    .then((itemList) => {
      this.setState({
        itemList: itemList,
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

      const { itemList, loading } = this.state;

      if(loading) {
        return <Spinner />
      }

      const items = this.renderItem(itemList);

        return (
          <div>
              <ul className="item-list list-group">
                {items}
              </ul>
          </div>
        );
    }
};