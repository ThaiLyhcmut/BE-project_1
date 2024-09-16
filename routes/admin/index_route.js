const dashboarhRoute = require("./dashboarh_route")
const productRouter = require("./product_route")
const PATH_ADMIN = require("../../config/system").prefixAdmin

module.exports = (app) => {
  // xử dụng router để dẫn đến các đường dẫn con
  // app.use("/", dashboarhRoute)
  app.use(`${PATH_ADMIN}/dashboarh`, dashboarhRoute)
  app.use(`${PATH_ADMIN}/products`, productRouter)
  // xử dụng router để dẫn đến các đường dẫn con
  
}