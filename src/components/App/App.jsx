import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import AddForm from '../AddForm/AddForm.jsx';
import ShoppingList from '..ShoppingList/ShoppingList.jsx';
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

        axios.post('/list', { itemToAdd })
            .then((response) => {
                console.log('in POST item', response);
                getList();
            }).catch((err) => {
                console.error('in POST error', err);
            });
    };



    return (
        <div className="App">
            <Header />
            <main>
                <AddForm addItem={addItem} />
                <ShoppingList shoppingList={shoppingList} />
            </main>
        </div>
    );
}

export default App;