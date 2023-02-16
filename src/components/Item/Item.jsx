import { useState } from "react";
import axios from "axios";

function Item({ item, removeItem }) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleBuyClick = () => {
    console.log(item);
    axios.put(`/list/${item.id}`, item.ispurchased)
      .then((response) => {

        // getList();
      })
      .catch((err) => {
        alert("Error Getting List Items");
        console.log(err);
      });
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
