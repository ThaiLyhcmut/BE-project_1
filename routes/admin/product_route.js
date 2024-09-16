const express = require("express")
const product_controller = require("../../controllers/admin/product_controller")
const router = express.Router()

// đường dẫn con
router.get("/", product_controller.index)
router.patch("/change", product_controller.changeStatus)
router.patch("/change-multi", product_controller.changeMulti)
router.patch("/delete", product_controller.delete)
// exports các đường dẫn con
module.exports = router