/*
Student Name : Christopher Koulougliotis
Student ID : 301227384
Date: 2022-09-20
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
