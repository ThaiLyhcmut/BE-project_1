// dotenv để che lại các thứ quan trọng
require('dotenv').config()

const express = require("express");
const routeClient = require("./routes/client/index_route");
const app = express()

// lấy PORT từ file .env
const port = process.env.PORT;

app.set('views', './views')
app.set('view engine', 'pug')

routeClient.index(app)



app.listen(port, () => {
  console.log(`website đang chạy localhot: http://localhost:${port}`)
})