const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
  res.send("Trang chu")
})


app.listen(port, () => {
  console.log(`website đang chạy localhot: http://localhost:${port}`)
})