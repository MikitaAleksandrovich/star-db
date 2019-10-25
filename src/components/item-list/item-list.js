import React from 'react';

import './item-list.css';


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
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};



export default ItemList;