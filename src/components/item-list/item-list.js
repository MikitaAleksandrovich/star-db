import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};


export default ItemList;