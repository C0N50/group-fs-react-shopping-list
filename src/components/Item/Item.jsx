import './Item.css'

function Item({item, removeItem, purchaseItem }) {

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
            <ul>{item.name}</ul>
            <ul>{item.quantity} {item.unit}</ul>
          </ul>
        </div>

          <span className={item.ispurchased ? 'BOUGHT': 'HIDE'}>PURCHASED</span>

        <div className= 'buttonList' >
          <button className={item.ispurchased ? 'HIDE': 'buy'} onClick={handleBuyClick} disabled={item.ispurchased}>Buy</button>
          <button className={item.ispurchased ? 'HIDE': 'remove'} onClick={handleRemoveClick}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default Item;
