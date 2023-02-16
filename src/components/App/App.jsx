import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const purchaseItem = () => {
        axios.put(`/list/${id}`)
        .then((response) => {
            getList();
          })
          .catch((err) => {
            alert("Error Getting List Items");
            console.log(err);
          });
      };

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
