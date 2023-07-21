import React, { useState } from "react";

function Item({ name, category }) {
  
  const [listItemObject, setListItemObject] = useState({
    isAddedToCart: false,
    className: '',
    buttonText: 'Add to Cart'
  })

  function handleCartButtonClick() {
    if (listItemObject.isAddedToCart) {
      setListItemObject({
        ...setListItemObject,
        isAddedToCart: false,
        className: '',
        buttonText: 'Add to Cart'
      })
    } else {
      setListItemObject({
        ...setListItemObject,
        isAddedToCart: true,
        className: 'in-cart',
        buttonText: 'Remove From Cart'
      })
    }
  }

  return (
    <li className={listItemObject.className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartButtonClick}>{listItemObject.buttonText}</button>
    </li>
  );
}

export default Item;
