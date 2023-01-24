const express = require('express')
const app = express()
const path = require('path')
const rotas = require('./routes')



app.set('views', path.resolve(__dirname, 'public'));
//app.use('view engine', 'html');
app.use(rotas)

app.listen(process.env.PORT || 3000,()=>{
    console.log('http://localhost:3000')
    console.log('servidor conectado')
})