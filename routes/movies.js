var express = require('express');
var router = express.Router();
var knex = require('../db/db_connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex.select('*').from('original').then(movies=>{
    res.json(movies);
  })
});

module.exports = router;
