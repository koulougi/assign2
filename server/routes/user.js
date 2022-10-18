let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to schema / book model
let User = require('../models/user');
let userController = require('../controllers/user');

/* GET route for book list page - read operation */

router.get('/', userController.displayUserList);

/* GET route for displaying add user list page - create operation */
router.get('/add',userController.displayAddPage);

/* GET route for processing add user list page - create operation */
router.post('/add', userController.processAddPage);

/* GET route for displaying edit user list page - update operation */
router.get('/edit/:id', userController.displayEditPage);

/* GET route for processing edit user list page - update operation */
router.post('/edit/:id', userController.processEditPage);

/* GET to perform deletion - delete operation */
router.get('/delete/:id', userController.performDelete);


module.exports = router;