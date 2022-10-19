/*
Student Name : Christopher Koulougliotis
Student ID : 301227384
Date: 2022-09-20
 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/Home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/project', indexController.displayProjectPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

// Get route for displaying login page
router.get('/login', indexController.displayLoginPage);

// Post route for processing login page
router.post('/login', indexController.processLoginPage);

// Get route for displaying register page
router.get('/register', indexController.displayRegisterPage);

// Post route for processing login page
router.post('/register', indexController.processRegisterPage);

// Get to perform logout
router.get('/logout', indexController.performLogout);


module.exports = router;
