/*
Student Name : Christopher Koulougliotis
Student ID : 301227384
Date: 2022-09-20
 */
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Home" });
});

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', { title: "Home" });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: "About Me" });
});

/* GET products page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: "Projects" });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: "Services" });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact" });
});

module.exports = router;
