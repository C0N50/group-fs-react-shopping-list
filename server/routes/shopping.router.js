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
router.post('/', (req, res) => {
  const item = req.body;
  const sqlText = `INSERT INTO shopping_table (name, quantity, unit)
                    VALUES ($1, $2, $3);`;
  pool
    .query(sqlText, [item.name, item.quantity, item.unit])
    .then((result) => {
      console.log('Added item', item);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Error in router POST', err);
      res.sendStatus(501);
    });
});

//PUT 
router.put('/:id', (req, res) => {
  const sqlText = `UPDATE shopping_table name SET name=$1, quantity=$2, unit=$3 WHERE id=$4;`;
  const sqlParams = [
    req.body.name,
    req.body.quantity,
    req.body.unit,
    req.params.id,
  ];

  pool
    .query(sqlText, sqlParams)
    .then((result) => {
      console.log('In PUT router', result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Error in PUT router', err);
      res.sendStatus(501);
    });
});

//DELETE for Clear
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

//Delete for Remove
router.delete('/:id', (req, res) => {
  console.log('Removing shopping_table');
  const id = req.params.id;

  let sqlQuery = `
    DELETE FROM "shopping_table" WHERE id = $1;
    `;

  pool
    .query(sqlQuery, [id])
    .then(() => {
      console.log('table deleted');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
