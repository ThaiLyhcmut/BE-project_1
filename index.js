// dotenv để che lại các thứ quan trọng
require('dotenv').config()
const database = require ("./config/database")
const express = require("express");
const routeAdmin = require("./routes/admin/index_route");
const routeClient = require("./routes/client/index_route");
const bodyParser = require('body-parser')

const app = express()

// bien toan cuc

app.locals.prefixAdmin = require("./config/system").prefixAdmin

// sử dụng folder public để lưu tài nguyên
app.use(express.static('public'))

// lấy PORT từ file .env
const port = process.env.PORT;
// kết nối data base theo URL 
database.connect(process.env.MONGO_URL)


app.set('views', './views')
app.set('view engine', 'pug')


app.use(bodyParser.json())

// gọi hàm index truyền vào app
routeAdmin(app)
routeClient(app)





app.listen(port, () => {
  console.log(`website đang chạy localhot: http://localhost:${port}`)
})