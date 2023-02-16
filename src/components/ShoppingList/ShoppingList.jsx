import React from "react";
import Item from "../Item/Item";

function ShoppingList({ shoppingList, removeItem }) {
  return (
    <>
      <h2>Shopping List</h2>
      <div className="list-buttons">
        <button>Reset</button>
        <button>Clear</button>
      </div>
      <div className="list-grid">
        {shoppingList.map((item) => (
          <Item removeItem={removeItem} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ShoppingList;
