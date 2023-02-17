import React from "react";
import './ShoppingList.css'

// would not need to pass removeItem shoppingList and purchaseItem
function ShoppingList({clearList, resetList }) {
  const handleClearClick = () => {
    clearList();
  };

  const handleResetClick = () => {
    resetList();

  }

  return (
    <div className="shoppingList">
      <h2 className='title'>Shopping List</h2>
      <div className="list-buttons buttonContainer">
        <button className='shoppingButtons reset' onClick={handleResetClick}>Reset</button>
        <button className='shoppingButtons clear' onClick={handleClearClick} >Clear</button>
      </div>
    </div>
  );
}

export default ShoppingList;
