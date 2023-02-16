import React from "react";
import Item from "../Item/Item";

function ShoppingList({ shoppingList, clearList, removeItem, purchaseItem, resetList }) {

  const handleClearClick = () => {
    console.log('Clicked Clear');
    clearList();
  };

  const handleResetClick = () => {
    console.log('Clicked Reset');
    resetList();

  }

  return (
    <>
      <h2>Shopping List</h2>
      <div className="list-buttons">
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleClearClick} >Clear</button>
      </div>
      <div className="list-grid">

        {shoppingList.map(item => (
          <Item purchaseItem={purchaseItem} removeItem={removeItem} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ShoppingList;
