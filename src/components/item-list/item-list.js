import React from 'react';
import { withData }  from '../HOC-helpers';

import './item-list.css';
import SwapiService from '../../service/swapi-service';

const  ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(item.id)}>
        {label}
      </li>
    );
  });

    return (
      <div>
          <ul className="item-list list-group">
            {items}
          </ul>
      </div>
    );
  }


const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);



