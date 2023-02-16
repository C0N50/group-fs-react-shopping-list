const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET


//POST


//PUT


//DELETE
router.delete('/', (req, res) =>{

    console.log('Clearing shopping_table');

    let sqlQuery = `
    TRUNCATE "shopping_table";
    `;

    pool.query(sqlQuery)
    .then (() => {
        console.log('table deleted');
        res.sendStatus(204);
    })
    .catch ((error) => {
        console.log('ERROR could not delete', error);
        res.sendStatus(500);
    })

})





module.exports = router;