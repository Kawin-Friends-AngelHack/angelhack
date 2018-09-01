const express = require('express')
const app = express()


const route = require('./router')

route(app)
app.use(express.static('vue/dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
