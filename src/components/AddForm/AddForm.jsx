import { useState } from "react";

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

        addItem(newItem, clearInputs);
    }

    const clearInputs = () => {
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
    }



    return(
        <>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Add New Item</button>
            </form>
        </>
    )
}


export default AddForm;