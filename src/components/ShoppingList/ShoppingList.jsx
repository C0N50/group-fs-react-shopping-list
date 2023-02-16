import React from "react";

function ShoppingList() {
  return (
    <>
      <h2>Shopping List</h2>
      <div className="list-buttons">
        <button>Reset</button>
        <button>Clear</button>
      </div>
      <div class="list-grid">
        {/* Add Item Component here */}
        <Item key={item.id} item={item} />
      </div>
    </>
  );
}

export default ShoppingList;
