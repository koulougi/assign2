let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}


module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About Me'});
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('project', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', {title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: 'Contact'});
}