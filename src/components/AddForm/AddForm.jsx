import { useState } from "react";
import './AddForm.css'

function AddForm({addItem}) {
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnit, setNewItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit
        }

        addItem(newItem, clearInputs());
    }

    const clearInputs = () => {
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
    }



    return(
        <div className="add">
            <h2 className="AddItem">Add an Item</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    onChange={ (event) => setNewItemName(event.target.value) } 
                    value={newItemName}
                />

                <label>Quantity:</label>
                <input 
                    onChange={ (event) => setNewItemQuantity(event.target.value) } 
                    value={newItemQuantity}
                />

                <label>Unit:</label>
                <input 
                    onChange={ (event) => setNewItemUnit(event.target.value) } 
                    value={newItemUnit}
                />

                <button className="button" type="submit">Add New Item</button>
            </form>
        </div>
    )
}


export default AddForm;