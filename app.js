var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var regRouter=require('./routes/register');
var loginRouter=require('./routes/login');
//var myuploadRouter=require('./routes/serverupload');
var myuploadRouter=require('./routes/myupload');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',regRouter);
app.use('/login',loginRouter);
//app.use('/upload',myuploadRouter);
app.use('/upload',myuploadRouter);
module.exports = app;
