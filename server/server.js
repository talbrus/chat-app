var path= require('path') // no need to install. its build in the module. 
var express = require('express')
//  __dirname = server.

var publicPath = path.join(__dirname , "../public")
var port = 3000
var app = express()

app.use(express.static(publicPath))

app.listen(port , ()=>{
    console.log(`~~~~server is up on port ${port}~~~~`)
})
