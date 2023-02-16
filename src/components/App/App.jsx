import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import AddForm from '../AddForm/AddForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);

    const getList = () => {

        axios.get('/list')
            .then((response) => {
                console.log('in GET list', response);
                setShoppingList(response.data);
            }).catch((err) => {
                console.error('GET error', err);
            });
    };

    useEffect(() => {
        getList();
    }, []);

    const addItem = (itemToAdd) => {
        console.log(itemToAdd);

        axios.post('/list', itemToAdd)
            .then((response) => {
                console.log('in POST item', response);
                getList();
            }).catch((err) => {
                console.error('in POST error', err);
            });
    };

    const purchaseItem = (item) => {
        axios.put(`/list/${item.id}`, item.ispurchased)
            .then((response) => {

                getList();
            })
            .catch((err) => {
                alert("Error Getting List Items");
                console.log(err);
            });
    };

    const removeItem = (id) => {
        axios.delete(`/list/${id}`)
            .then((response) => {
                getList();
            })
            .catch((err) => {
                alert("Error Deleting List Items");
                console.log(err);
            });
    };

    const clearList = () => {
        axios.delete('/list')
            .then((response) => {
                console.log('Cleared Table:', response);
                getList();
            })
            .catch((err) => {
                console.log('Error on clear', clear);
            });
    };


    return (
        <div className="App">
            <Header />
            <main>
                <AddForm addItem={addItem} />
                <ShoppingList purchaseItem={purchaseItem} removeItem={removeItem} shoppingList={shoppingList} clearList={clearList} />

            </main>
        </div>
    );
};


export default App;