import { useState } from "react";

function Item({ item, removeItem }) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleBuyClick = () => {
    console.log(item);
    setIsPurchased(!setIsPurchased);
  };

  const handleRemoveClick = () => {
    console.log("Removing", item);
    removeItem(item.id);
  };

  return (
    <>
      <div className="item-style">
        <ul>
          <li>{item.name}</li>
          <li>{item.quantity}</li>
          <li>{item.unit}</li>
        </ul>
        <button onClick={handleBuyClick}>Buy</button>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </>
  );
}

export default Item;
