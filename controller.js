const path = require('path')
exports.paginaInicial = (req,res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"))
}