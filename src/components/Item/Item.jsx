import { useState } from "react";
import axios from "axios";

function Item({ item, removeItem, purchaseItem }) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleBuyClick = () => {
    console.log(item);
    purchaseItem(item);
  };

  const handleRemoveClick = () => {
    console.log("Removing", item);
    removeItem(item.id);
  };

  return (
    <>
      <div className='item-style'>
        <div className="item-style">
          <ul>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.unit}</li>
          </ul>
        </div>
        <button onClick={handleBuyClick} disabled={item.ispurchased}>Buy</button>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </>
  );
}

export default Item;
