const express = require('express');
const { dirname } = require('path');
const app = express()
const path = require('path')
const rotas = require('./routes')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'public', 'index.html'));
//app.use('view engine', 'ejs');

app.use(rotas)

app.listen(process.env.PORT || 3000,()=>{
    console.log('http://localhost:3000')
    console.log('servidor conectado')
})