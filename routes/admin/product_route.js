const express = require("express")
const product_controller = require("../../controllers/admin/product_controller")
const router = express.Router()
const multer = require('multer');
const validates = require("../../validates/admin/product_validate")


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
    const fileName = `${Date.now()} - ${file.originalname}`
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
// đường dẫn con
router.get("/", product_controller.index)
router.get("/create", product_controller.create)
router.get("/detail/:id", product_controller.detail)
router.get("/edit/:id", product_controller.edit)
router.post("/create", upload.single("thumbnail"), validates.createProduct, product_controller.createPost)
router.patch("/edit/:id", upload.single("thumbnail"), validates.createProduct , product_controller.editPatch)
router.patch("/change", product_controller.changeStatus)
router.patch("/change-multi", product_controller.changeMulti)
router.patch("/delete", product_controller.delete)
router.patch("/change-position", product_controller.changePosition)
// exports các đường dẫn con
module.exports = router