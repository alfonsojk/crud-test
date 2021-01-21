
const path = require('path')
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose')

// utilizar express e inicializarlo
//conectar a base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine','ejs'); 

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', indexRoutes);

//empezar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});