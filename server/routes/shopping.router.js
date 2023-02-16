const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET
router.get('/', (req, res) => {
  console.log('in GET router');
  const sqlText = `
        SELECT * FROM shopping_table ORDER BY name DESC;
    `;

  pool
    .query(sqlText)
    .then((result) => {
      console.log('GET from table', result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.error('In router GET error', err);
      res.sendStatus(500);
    });
});

//POST

//PUT

//DELETE
router.delete('/', (req, res) => {
  console.log('Clearing shopping_table');

  let sqlQuery = `
    TRUNCATE "shopping_table";
    `;

  pool
    .query(sqlQuery)
    .then(() => {
      console.log('table deleted');
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('ERROR could not delete', error);
      res.sendStatus(500);
    });
});

module.exports = router;
