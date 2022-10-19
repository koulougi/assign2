let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//helper func for guard
function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//connect to schema / book model
//let User = require('../models/user');
let userController = require('../controllers/user');

/* GET route for book list page - read operation */

router.get('/', userController.displayUserList);

/* GET route for displaying add user list page - create operation */
router.get('/add' , requireAuth, userController.displayAddPage);

/* GET route for processing add user list page - create operation */
router.post('/add', requireAuth, userController.processAddPage);

/* GET route for displaying edit user list page - update operation */
router.get('/edit/:id', requireAuth, userController.displayEditPage);

/* GET route for processing edit user list page - update operation */
router.post('/edit/:id', requireAuth, userController.processEditPage);

/* GET to perform deletion - delete operation */
router.get('/delete/:id', requireAuth, userController.performDelete);


module.exports = router;