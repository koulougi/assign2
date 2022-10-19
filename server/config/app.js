/*
Student Name : Christopher Koulougliotis
Student ID : 301227384
Date: 2022-09-20
 */

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


//db setup
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to the DB URI
mongoose.connect(DB.URI,  {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error: '));
mongoDB.once('open', ()=>{
  console.log('Connection was a Success to MongoDB')
});

let indexRouter = require('../routes');
let usersRouter = require('../routes/users');
let userRouter = require('../routes/user');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express session
app.use(session({
  secret: "SomeSecret",
      saveUninitialized: false,
      resave: false

}));

//init flash
app.use(flash());

//init passport
app.use(passport.initialize());
app.use(passport.session());

//passport user config

//create a users model instance
let userModel = require('../models/userMod');
let Users = userModel.Users;

//implement a user auth strat
passport.use(Users.createStrategy());

//serialize and deserialize user info
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user_collect', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: "Error" });
});

module.exports = app;
