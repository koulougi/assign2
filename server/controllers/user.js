let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to model
let User = require('../models/user');

module.exports.displayUserList = (req, res, next) =>{
    User.find((err, UserList) =>{
        if(err){
            return console.error(err);

        }
        else{
            //console.log(BookList);

            res.render('user/list', {title: 'Users', UserList: UserList});
        }
    });
}

module.exports.displayAddPage = (req, res, next) =>{
    res.render('user/add', {title: 'Add User'});
}

module.exports.processAddPage = (req, res, next) =>{
    let newUser = User({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });

    User.create(newUser, (err, User) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the user list
            res.redirect('/user_collect');
        }
    });
}

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    User.findById(id, (err, userEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('user/edit', {title: 'Edit User', user: userEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updatedUser = User({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });
    User.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/user_collect')
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/user_collect')
        }
    });
}