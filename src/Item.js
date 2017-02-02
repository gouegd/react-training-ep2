import React from 'react';

const Item = ({name, image, hide}) =>
  <div className="Item">
    <div>{name}</div>
    <img src={image} alt={name} />
    <button onClick={ () => hide(image) }>Hide me</button>
  </div>
;

export default Item;
