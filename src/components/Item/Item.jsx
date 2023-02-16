import { useState } from "react";

function Item({ item }) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleClick = () => {
    console.log(item);
    setIsPurchased(!setIsPurchased);
  };

  return (
    <>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

export default Item;
