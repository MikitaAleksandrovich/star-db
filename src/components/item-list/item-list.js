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
        itemList,
        loading: false,
      })
    })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(item.id)}>
          {label}
        </li>
      );
    });
  }


    render() {

      const { itemList, loading } = this.state;

      if(loading) {
        return <Spinner />
      }

      const items = this.renderItems(itemList);

        return (
          <div>
              <ul className="item-list list-group">
                {items}
              </ul>
          </div>
        );
    }
};