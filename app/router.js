const controller = require('./controller')

module.exports=function(app){
    app.get('/dude', controller.home)
}